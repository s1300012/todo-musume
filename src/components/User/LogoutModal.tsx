// src/components/User/LogoutModal.tsx
import Modal from "../common/Modal";
import { logout } from "../../utils/firebase/logout";
import { playSE } from "../../utils/music/soundPlayer";
import { closeButton, completeSound } from "../../utils/music/musicContents";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const LogoutModal = ({ isOpen, onClose }: Props) => {

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("ログアウト失敗:", err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">ログアウトしますか？</h2>

        <div className="flex justify-center gap-6 pt-4">
          <button
            onClick={() => {playSE(completeSound); handleLogout()}}
            className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 hover:scale-105 transition"
          >
            ログアウト
          </button>
          <button
            onClick={() => {playSE(closeButton); onClose()}}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-400 hover:scale-105 transition"
          >
            キャンセル
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
