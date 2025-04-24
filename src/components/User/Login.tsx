import { auth, db } from '../../utils/firebase/firebase'; // ← db を含める
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { signInWithGoogle } from '../../utils/firebase/firebaseAuth'
import affection1 from '../../assets/backgound/title.png'
import { useEffect } from 'react';
import { onSound, playSE } from '../../utils/music/soundPlayer';
import { clickSound, selectSound, titleBGM, titleCall } from '../../utils/music/musicContents';

const Login = () => {
  const handleLogin = async () => {
    try {
      playSE(titleCall);
      await signInWithGoogle();
  
      const user = auth.currentUser;
      if (!user) return;
  
      const userRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(userRef);
  
      if (!docSnap.exists()) {
        // ユーザーが初回なら新規作成
        await setDoc(userRef, {
          userId: user.uid,       // Google認証のID
          name: null,
          gender: '未設定',
          affectionLevel: null,
          characterId: null,
          createdAt: new Date()
        });
        console.log("ユーザー初期データ作成");
      }
  
    } catch (err) {
      console.error('ログイン失敗:', err);
    }
  };

  useEffect(() => {
    onSound(titleBGM);
  }, []);
  

  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover animate-delayed-fadein"
      style={{
        backgroundImage: `url(${affection1})`,
        backgroundSize: 'cover',
      }}
    >
      {/* ログインボタン */}
      <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => {playSE(clickSound); handleLogin();}}
          onMouseEnter={() => playSE(selectSound)}
          className="flex items-center gap-3 bg-white text-gray-700 border border-gray-300 px-10 py-3 rounded-full 
          shadow-md hover:shadow-3lg transition duration-200 hover:bg-gray-100 hover:scale-105 text-base font-semibold cursor-pointer"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Googleアカウントでログイン
        </button>
      </div>
    </div>
  )
}

export default Login
