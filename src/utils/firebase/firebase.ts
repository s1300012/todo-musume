// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGc0NKCUuSHf3HQYpTZZv_eYz5zGAR_Js",
  authDomain: "todo-musume.firebaseapp.com",
  projectId: "todo-musume",
  storageBucket: "todo-musume.firebasestorage.app",
  messagingSenderId: "498014062713",
  appId: "1:498014062713:web:05aa842d399d4f7355aca8",
  measurementId: "G-TLFNCDFG5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)