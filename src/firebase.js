import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2ZEY5kSwG41e76pt9crsF7c6kZPbn24s",
  authDomain: "react-auth-1a623.firebaseapp.com",
  projectId: "react-auth-1a623",
  storageBucket: "react-auth-1a623.firebasestorage.app",
  messagingSenderId: "1081032229293",
  appId: "1:1081032229293:web:48caf4fbb1463efd49a124",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
