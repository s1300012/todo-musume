import { User } from "firebase/auth";
import UserSettingsModal from "../User/UserSettingsModal";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";
import { playSE } from "../../utils/music/soundPlayer";
import { clickSound } from "../../utils/music/musicContents";
import LogoutModal from "../User/LogoutModal";

type Props = {
  user: User;
  ref: number;
};

const AppHeader = ({ user, ref}: Props) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [showLogout, setShowLogout] = useState(false);

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
  }, [user, ref]);

  return (
    <>
      <div className="fixed top-0 w-full bg-gray-800 text-white px-6 py-1 shadow-md">
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
              onClick={() => {playSE(clickSound);setIsSettingsOpen(true)}}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1 rounded cursor-pointer hover:scale-105 duration-300"
            >
              ユーザー設定
            </button>
            <button
              onClick={() => {playSE(clickSound); setShowLogout(true);}}
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded cursor-pointer hover:scale-105 duration-300"
            >
              ログアウト
            </button>
          </div>
        </div>
      </div>
      <UserSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSaved={() => {
          fetchUserName(); // 保存後に再取得
          setIsSettingsOpen(false);
        }}
      />
      <LogoutModal isOpen={showLogout} onClose={() => setShowLogout(false)} />
    </>
  );
};

export default AppHeader;
