import Modal from "../common/Modal";
import { Task } from "../../utils/constants/task";
import { auth, db } from "../../utils/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { playSE } from "../../utils/music/soundPlayer";
import { closeButton, completeSound } from "../../utils/music/musicContents";

type Props = {
  isOpen: boolean;
  task: Task | null;
  onCancel: () => void;
  onCompleted: () => void;
  setNewAffectionLevel: (level: number) => void;
};


const CompleteTaskModal = ({ isOpen, task, onCancel, onCompleted, setNewAffectionLevel}: Props) => {

  const handleComplete = async () => {
    if (!auth.currentUser || !task) return;

    const userRef = doc(db, "users", auth.currentUser.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const data = userSnap.data();
      const currentAffection = data.affectionLevel || 1;
      const newAffection = Math.min(currentAffection + task.level, 6); // 難易度分だけ加算
      setNewAffectionLevel(newAffection);

      await updateDoc(userRef, {
        affectionLevel: newAffection,
      });

      // 好感度アップモーダル表示
    }

    onCompleted(); // 通常完了処理（削除等）
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onCancel}>
        <div className="text-center space-y-6">
          <p className="text-lg font-semibold">このタスクを完了しますか？</p>

          {task && (
            <div className="rounded p-4 text-left shadow bg-gray-50">
              <div className="flex items-start gap-4">
                <div
                  className="w-8 h-8 rounded-full mt-1"
                  style={{ backgroundColor: task.color }}
                />
                <div className="space-y-1">
                  <p><span className="font-semibold">タイトル:</span> {task.title}</p>
                  <p><span className="font-semibold">期限:</span> {task.dueDate} {task.dueTime && ` ${task.dueTime}`}</p>
                  <p><span className="font-semibold">レベル:</span> {task.level}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => {playSE(completeSound); handleComplete();}}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 duration-300"
            >
              完了
            </button>
            <button
              onClick={() => {playSE(closeButton); onCancel()}}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 hover:scale-105 duration-300"
            >
              戻る
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CompleteTaskModal;
