import Modal from "../common/Modal";
import { useState } from "react";
import { db, auth } from "../../utils/firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { playSE } from "../../utils/music/soundPlayer";
import { completeSound } from "../../utils/music/musicContents";

const genders = ["未設定", "男性", "女性", "その他"];

type Props = {
  isOpen: boolean;
  onComplete: () => void;
};

const UserRegisterModal = ({ isOpen, onComplete }: Props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState<{ name?: string; gender?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; gender?: string } = {};
    if (!name.trim()) newErrors.name = "名前は必須です";
    if (!gender) newErrors.gender = "性別を選択してください";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!auth.currentUser || !validate()) return;
    const ref = doc(db, "users", auth.currentUser.uid);
    await updateDoc(ref, {
      name,
      gender,
      loggedInFlg: true, // 初回登録済みにする
    });
    onComplete();
  };

  return (
    <Modal isOpen={isOpen}>
      <form className="space-y-6 p-6 bg-white rounded-2xl shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">ユーザー初回登録</h2>

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
            onClick={() => {playSE(completeSound); handleSubmit()}}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 duration-300"
          >
            保存してキャラ選択へ
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UserRegisterModal;
