import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase";
import Modal from "../common/Modal";
import ColorSelect from "../common/ColorSelect";
import SelectBox from "../common/SelectBox";

type Props = {
  isOpen: boolean;
  onCancel: () => void;
  onAdded: () => void;
};

const levelOptions = [
  { label: "Level 1", value: 1 },
  { label: "Level 2", value: 2 },
  { label: "Level 3", value: 3 },
  { label: "Level 4", value: 4 },
  { label: "Level 5", value: 5 },
];

export default function AddTaskForm({isOpen, onCancel, onAdded }: Props) {
  // 追加完了時にモーダル閉じる
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [color, setColor] = useState("#000000");
  const [level, setLevel] = useState(1);
  const [content, setContent] = useState("");

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert("ログインが必要です");
      return;
    }

    try {
      await addDoc(collection(db, "todos"), {
      title,
      dueDate,
      dueTime,
      color,
      level,
      content,
      userId: auth.currentUser?.uid,
      createdAt: serverTimestamp(), // ← これを必ず入れる！
    });

      setTitle("");
      setDueDate("");
      setDueTime("");
      setColor("#000000");
      setLevel(1);
      setContent("");
      onAdded();
    } catch (error) {
      console.error("追加エラー:", error);
      alert("タスクの追加に失敗しました");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <h1 className="text-xl font-bold text-center mb-4">タスク追加</h1>
      <form onSubmit={handleAddTask} className="space-y-6 p-6 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto">
        {/* タイトル */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <label className="w-32 font-semibold">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="タスク名を入力"
            className="border px-3 py-2 w-full rounded-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        {/* 期限 */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <label className="w-32 font-semibold">期限（任意）</label>
          <div className="flex gap-4 w-full">
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border px-3 py-2 rounded-lg w-full shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="time"
              value={dueTime}
              onChange={(e) => setDueTime(e.target.value)}
              className="border px-3 py-2 rounded-lg w-full shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* カラー */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <label className="w-32 font-semibold">カラー</label>
          <ColorSelect
            value={color}
            onChange={setColor}
            className="w-full"
          />
        </div>


        {/* 難易度 */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <label className="w-32 font-semibold">難易度</label>
          <SelectBox
            value={level}
            onChange={(val) => setLevel(Number(val))}
            options={levelOptions}
            className="w-full"
            placeholder="難易度を選択"
          />
        </div>

        {/* 概要 */}
        <div className="flex flex-col sm:flex-row items-start gap-2">
          <label className="w-32 font-semibold">概要</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="タスクの詳細や補足を記入"
            rows={4}
            className="border px-3 py-2 w-full rounded-lg shadow-sm resize-y hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            タスク追加
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            戻る
          </button>
        </div>
      </form>
    </Modal>
  );
}