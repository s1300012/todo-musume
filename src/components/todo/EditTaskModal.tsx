import { useState, useEffect } from "react";
import Modal from "../common/Modal";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";
import ColorSelect from "../common/ColorSelect";
import SelectBox from "../common/SelectBox";

const levelOptions = [
  { label: "Level 1", value: 1 },
  { label: "Level 2", value: 2 },
  { label: "Level 3", value: 3 },
  { label: "Level 4", value: 4 },
  { label: "Level 5", value: 5 },
];

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
  isOpen: boolean;
  task: Task | null;
  onCancel: () => void;
  onUpdated: () => void;
};

const EditTaskModal = ({ isOpen, task, onCancel, onUpdated }: Props) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [color, setColor] = useState("#000000");
  const [level, setLevel] = useState(1);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDueDate(task.dueDate);
      setDueTime(task.dueTime);
      setColor(task.color);
      setLevel(task.level);
      setContent(task.content);
    }
  }, [task]);

  const handleUpdate = async () => {
    if (!task) return;
    try {
      const ref = doc(db, "todos", task.id);
      await updateDoc(ref, {
        title,
        dueDate,
        dueTime,
        color,
        level,
        content
      });
      onUpdated();
    } catch (err) {
      console.error("更新エラー:", err);
      alert("タスクの更新に失敗しました");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <form className="space-y-6 p-6 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">タスクを編集</h2>

        {/* タイトル */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <label className="w-32 font-semibold">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            rows={4}
            className="border px-3 py-2 w-full rounded-lg shadow-sm resize-y hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            更新
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            戻る
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditTaskModal;
