import { User } from "firebase/auth";
import { logout } from "../../utils/firebase/logout";
import UserSettingsModal from "../User/UserSettingsModal";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";

type Props = {
  user: User;
};

const AppHeader = ({ user }: Props) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [userName, setUserName] = useState<string>("");

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("ログアウト失敗:", err);
    }
  };

  // useEffect の外に出して再利用可能にする
  const fetchUserName = async () => {
    if (!user.uid) return;
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data();
      setUserName(data.name || "名前を設定してね");
    } else {
      setUserName("名前を設定してね");
    }
  };

  useEffect(() => {
    fetchUserName();
  }, [user]);

  return (
    <>
      <header className="fixed top-0 w-full bg-gray-800 text-white px-6 py-3 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="ユーザーアイコン"
                className="w-10 h-10 rounded-full border border-white"
              />
            )}
            <span className="text-sm">{userName}</span>
          </div>
          <div className="flex gap-10">
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded"
            >
              ユーザー設定
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
            >
              ログアウト
            </button>
          </div>
        </div>
      </header>
      <UserSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSaved={() => {
          fetchUserName(); // 保存後に再取得
          setIsSettingsOpen(false);
        }}
      />
    </>
  );
};

export default AppHeader;
