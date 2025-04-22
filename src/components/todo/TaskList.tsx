import { RefObject, useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase";
import DeleteTaskModal from "./DeleteTaskModal";
import EditTaskModal from "./EditTaskModal";
import AddTaskModal from "./AddTaskModal";
import CompleteTaskModal from "./CompleteTaskModal";

type Task = {
  id: string;
  title: string;
  dueDate: string;
  dueTime: string;
  color: string;
  level: number;
  content: string;
};

type Props = {
  characterDisplayRef: RefObject<{ refreshCharacterData: () => void } | null>;
};

export default function TaskList({ characterDisplayRef }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openAddingTask, setOpenAddingTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [completeTask, setCompleteTask] = useState<Task | null>(null);
  const [sortKey, setSortKey] = useState<"dueDate" | "level" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");


  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, "todos"),
      where("userId", "==", auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results: Task[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Task[];

      setTasks(results);
    });

    return () => unsubscribe();
  }, []);

  const sortedTasks = [...tasks].sort((a, b) => {
    if (!sortKey) return 0;
    if (sortKey === "dueDate") {
      const aHasDate = !!a.dueDate;
      const bHasDate = !!b.dueDate;

      if (!aHasDate && bHasDate) return 1;   // aが欠損 → 後ろに
      if (aHasDate && !bHasDate) return -1;  // bが欠損 → bを後ろに
      if (!aHasDate && !bHasDate) return 0;  // 両方欠損 → 同順位
      const aDate = new Date(`${a.dueDate}T${a.dueTime || "00:00"}`);
      const bDate = new Date(`${b.dueDate}T${b.dueTime || "00:00"}`);
      return sortOrder === "asc"
        ? aDate.getTime() - bDate.getTime()
        : bDate.getTime() - aDate.getTime();
    }
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    }
    return 0;
  });
  

  const toggleSort = (key: "dueDate" | "level") => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const handleComplete = async () => {
    if (!completeTask) return;
    try {
      await deleteDoc(doc(db, "todos", completeTask.id));
      setCompleteTask(null);
      characterDisplayRef.current?.refreshCharacterData();
    } catch (err) {
      console.error("削除エラー:", err);
      alert("削除に失敗しました");
    }
  };

  const handleDelete = async () => {
    if (!selectedTask || !auth.currentUser) return;
  
    try {
      // タスク削除
      await deleteDoc(doc(db, "todos", selectedTask.id));
  
      // 好感度レベルを減らす
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        const currentLevel = data.affectionLevel || 1;
        const newLevel = Math.max(1, currentLevel - 1);
        await updateDoc(userRef, { affectionLevel: newLevel });
      }
  
      setSelectedTask(null);
      characterDisplayRef.current?.refreshCharacterData(); // 好感度UI更新
    } catch (err) {
      console.error("削除エラー:", err);
      alert("削除に失敗しました");
    }
  };
  

  return (
<>
  {/* 📄 テーブルを囲む「紙」 */}
  <div className="fixed top-20 bg-white rounded-xl shadow-lg p-8 w-[50%] max-w-5xl h-[85vh] overflow-hidden ">
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 pb-4">
      <h2 className="text-xl font-bold">あなたのタスク一覧</h2>
      <button
        onClick={() => setOpenAddingTask(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-3 sm:mt-0"
      >
        タスクを作成
      </button>
    </div>
    {/* 📜 スクロールするテーブル */}
    <div className="h-[70vh] overflow-auto pt-2">
      {tasks.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-500 text-3xl">まだタスクがありません。</p>
        </div>
      ) : (
        <table className="min-w-full text-sm border border-gray-300 rounded overflow-hidden">
          <thead className="bg-gray-100 text-left sticky top-0 ">
            <tr>
              <th className="px-4 py-2 font-semibold w-[40%]">タスク名</th>
              <th
                className="px-4 py-2 font-semibold cursor-pointer hover:underline w-[20%]"
                onClick={() => toggleSort("dueDate")}
              >
                期限 {sortKey === "dueDate" && (sortOrder === "asc" ? "⌛️" : "⏳")}
              </th>
              <th
                className="px-4 py-2 font-semibold cursor-pointer hover:underline w-[15%]"
                onClick={() => toggleSort("level")}
              >
                難易度 {sortKey === "level" && (sortOrder === "asc" ? "⌛️" : "⏳")}
              </th>
              <th className="px-4 py-2 font-semibold w-[25%]"></th>
            </tr>
          </thead>
          <tbody>
          {sortedTasks.map((task) => {
            const isExpired = task.dueDate && new Date(`${task.dueDate}T${task.dueTime || "00:00"}`) < new Date();
            return (
              <tr
                key={task.id}
                onClick={() => setEditingTask(task)}
                className="cursor-pointer hover:bg-blue-50 transition border-t border-gray-200"
              >
                <td className="p-3 flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: task.color }}
                  />
                  <span>{task.title}</span>
                </td>
                <td className="p-3 text-gray-700">
                  {task.dueDate} {task.dueTime && ` ${task.dueTime}`}
                </td>
                <td className="p-3 text-gray-600">Level {task.level}</td>
                <td className="p-3">
                  <div className="flex flex-col gap-1">
                    {isExpired && (
                      <p className="text-red-500 text-xs">
                        ※期限が切れているのでリタイアしてください
                      </p>
                    )}
                    <div className="flex gap-2">
                      {!isExpired && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCompleteTask(task);
                          }}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          完了
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTask(task);
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        リタイア
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
      )}
    </div>
  </div>

  {/* モーダルたち */}
  <AddTaskModal isOpen={openAddingTask} onCancel={() => setOpenAddingTask(false)} onAdded={() => setOpenAddingTask(false)} />
  <EditTaskModal isOpen={!!editingTask} task={editingTask} onCancel={() => setEditingTask(null)} onUpdated={() => setEditingTask(null)} />
  <CompleteTaskModal isOpen={!!completeTask} task={completeTask} onCancel={() => setCompleteTask(null)} onCompleted={handleComplete} />
  <DeleteTaskModal isOpen={!!selectedTask} task={selectedTask} onCancel={() => setSelectedTask(null)} onConfirm={handleDelete} />
</>

  );
}
