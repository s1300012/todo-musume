// src/components/Login.tsx
import { signInWithGoogle } from '../../utils/firebase/firebaseAuth'

const Login = () => {
  const handleLogin = async () => {
    try {
      await signInWithGoogle()
    } catch (err) {
      console.error('ログイン失敗:', err)
    }
  }

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-6">To-do娘</h1>
      <h3 className="font-bold mb-6">~ヤらないお兄ちゃんざぁこざぁこ~</h3>
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded"
      >
        Googleアカウントでログイン
      </button>
    </div>
  )
}

export default Login
