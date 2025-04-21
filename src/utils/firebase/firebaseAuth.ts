// firebaseAuth.ts
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase'

const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log('ログイン成功:', user)
    return user
  } catch (error) {
    console.error('Googleログイン失敗:', error)
    throw error
  }
}
