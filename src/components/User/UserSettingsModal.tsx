// src/components/UserSettingsModal.tsx
import { useEffect, useState } from "react";
import Modal from "../common/Modal";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase";
import { playSE } from "../../utils/music/soundPlayer";
import { closeButton } from "../../utils/music/musicContents";

const genders = ["未設定", "男性", "女性", "その他"];

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSaved: () => void; // ✅ 新しく追加
};

const UserSettingsModal = ({ isOpen, onClose, onSaved}: Props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("未設定");
  const [errors, setErrors] = useState<{ name?: string; gender?: string }>({});

  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.currentUser) return;
      const ref = doc(db, "users", auth.currentUser.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setName(data.name || "");
        setGender(data.gender || "未設定");
      }
    };
    if (isOpen) fetchUserData();
  }, [isOpen]);

  const validate = () => {
    const newErrors: { name?: string; gender?: string } = {};
    if (!name.trim()) newErrors.name = "名前は必須です";
    if (!gender) newErrors.gender = "性別を選択してください";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!auth.currentUser || !validate()) return;
  
    const ref = doc(db, "users", auth.currentUser.uid);
  
    try {
      await setDoc(
        ref,
        {
          name,
          gender,
        },
        { merge: true } // 🔑 既存の他のフィールドを保持
      );
      onSaved(); // ✅ 保存後コールバック
      onClose();
    } catch (error) {
      console.error("ユーザー情報の保存に失敗しました:", error);
      alert("保存に失敗しました。もう一度お試しください。");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="space-y-6 p-6 bg-white rounded-2xl shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">ユーザー設定</h2>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">名前</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-3 py-2 rounded-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">性別</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border px-3 py-2 rounded-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {genders.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="button"
            onClick={() => {playSE(closeButton);handleSave()}}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 duration-300"
          >
            保存
          </button>
          <button
            type="button"
            onClick={() => {playSE(closeButton);onClose()}}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 hover:scale-105 duration-300"
          >
            キャンセル
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UserSettingsModal;