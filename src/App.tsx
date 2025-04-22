import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from './utils/firebase/firebase'
import AppHeader from './components/layout/AppHeader'
import Login from './components/User/Login'
import Top from './components/Top'
import background from "./assets/backgound/background.png"

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })

    return () => unsubscribe()
  }, [])

  return (
    <>
      {currentUser ? 
        <div className="relative h-screen w-screen overflow-hidden">
        {/* 背景画像 */}
          <div
            className="fixed top-0 left-0 h-screen w-screen bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
            }}
          />
            <AppHeader user={currentUser} />
            <div className="min-h-screen pt-15 px-4 bg-gray-100">
              <Top />
            </div>
          </div>
      :
        <Login />
      }
    </>
  )
}

export default App
