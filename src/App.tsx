import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from './utils/firebase/firebase'
import Login from './components/User/Login'
import Top from './components/Top'
import StartScreen from './components/StartScreen'
import { loadGoogleFont } from './utils/font/fontfamily'

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [started, setStarted] = useState(false) // ⭐ 最初の画面表示制御

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      loadGoogleFont();
    })
    return () => unsubscribe()
  }, [])

  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />
  }

  return (
    <>
      {currentUser ? 
        <Top currentUser={currentUser} />
      :
        <Login />
      }
    </>
  )
}

export default App
