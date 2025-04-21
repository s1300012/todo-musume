import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from './utils/firebase/firebase'
import AppHeader from './components/layout/AppHeader'
import Login from './components/User/Login'
import Top from './components/Top'

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
      {currentUser && <AppHeader user={currentUser} />}
      <div className="min-h-screen pt-15 px-4 bg-gray-100">
        {currentUser ? <Top /> : <Login />}
      </div>
    </>
  )
}

export default App
