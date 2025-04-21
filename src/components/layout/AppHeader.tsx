// src/components/AppHeader.tsx
import { User } from 'firebase/auth'
import { logout } from '../../utils/firebase/logout'

type Props = {
  user: User
}

const AppHeader = ({ user }: Props) => {
  const handleLogout = async () => {
    try {
      await logout()
    } catch (err) {
      console.error('ログアウト失敗:', err)
    }
  }

  return (
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
          <span className="text-sm">{user.displayName}</span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
        >
          ログアウト
        </button>
      </div>
    </header>
  )
}

export default AppHeader
