import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
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

export default function TaskList() {
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
    const aValue = a[sortKey];
    const bValue = b[sortKey];
  
    if (sortKey === "dueDate") {
      const aDate = new Date(`${a.dueDate}T${a.dueTime || "00:00"}`);
      const bDate = new Date(`${b.dueDate}T${b.dueTime || "00:00"}`);
      return sortOrder === "asc"
        ? aDate.getTime() - bDate.getTime()
        : bDate.getTime() - aDate.getTime();
    }
    
  
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
    } catch (err) {
      console.error("削除エラー:", err);
      alert("削除に失敗しました");
    }
  };

  const handleDelete = async () => {
    if (!selectedTask) return;
    try {
      await deleteDoc(doc(db, "todos", selectedTask.id));
      setSelectedTask(null);
    } catch (err) {
      console.error("削除エラー:", err);
      alert("削除に失敗しました");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-[55%] max-w-5xl mt-8">
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-10 mb-4">
        <h2 className="text-xl font-bold">あなたのタスク一覧</h2>
        <button
          onClick={() => setOpenAddingTask(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          タスクを作成
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className="text-gray-500">まだタスクがありません。</p>
      ) : (
       <table className="min-w-full text-sm border border-gray-300 rounded overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 font-semibold">タスク名</th>
              <th
                className="px-4 py-2 font-semibold cursor-pointer hover:underline"
                onClick={() => toggleSort("dueDate")}
              >
                期限 {sortKey === "dueDate" && (sortOrder === "asc" ? "⌛️" : "⏳")}
              </th>
              <th
                className="px-4 py-2 font-semibold cursor-pointer hover:underline"
                onClick={() => toggleSort("level")}
              >
                難易度 {sortKey === "level" && (sortOrder === "asc" ? "⌛️" : "⏳")}
              </th>
              <th className="px-4 py-2 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map((task) => (
              <tr
                key={task.id}
                className="border-t border-gray-200 h-15 rounded-md shadow-sm p-5 m-1"
              >
                <td>
                  <div className="bg-white p-3 m-1 flex items-center space-x-2">
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: task.color }}
                    />
                    <span>{task.title}</span>
                  </div>
                </td>
                <td>
                  <div className="bg-white p-3 m-1 text-gray-700">
                    {task.dueDate}
                    {task.dueTime && ` ${task.dueTime}`}
                  </div>
                </td>
                <td>
                  <div className="bg-white p-3 m-1 text-gray-600">
                    Level {task.level}
                  </div>
                </td>
                <td>
                  <div className="bg-white p-3 m-1">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setEditingTask(task)}
                        className="bg-black text-white px-3 py-1 rounded text-xs hover:bg-gray-800"
                      >
                        ✏ 編集
                      </button>
                      <button
                        onClick={() => setCompleteTask(task)}
                        className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
                      >
                        ✨ 完了
                      </button>
                      <button
                        onClick={() => setSelectedTask(task)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
                      >
                        💀 リタイア
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <AddTaskModal
        isOpen={openAddingTask}
        onCancel={() => setOpenAddingTask(false)}
        onAdded={() => setOpenAddingTask(false)}
      />
      <EditTaskModal
        isOpen={!!editingTask}
        task={editingTask}
        onCancel={() => setEditingTask(null)}
        onUpdated={() => setEditingTask(null)}
      />
      <CompleteTaskModal
        isOpen={!!completeTask}
        task={completeTask}
        onCancel={() => setCompleteTask(null)}
        onCompleted={handleComplete}
      />
      {/* 削除確認モーダル */}
      <DeleteTaskModal
        isOpen={!!selectedTask}
        task={selectedTask}
        onCancel={() => setSelectedTask(null)}
        onConfirm={handleDelete}
      />
      </div>
  );
}
