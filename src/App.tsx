import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from './utils/firebase/firebase'
import Login from './components/User/Login'
import Top from './components/Top'
import { loadGoogleFont } from './utils/font/fontfamily'



function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      loadGoogleFont();
    })

    return () => unsubscribe()
  }, [])

  return (
    <>
      {currentUser ? 
        <Top currentUser={currentUser}/>
      :
        <Login/>
      }
    </>
  )
}

export default App
