import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC77Xh19H85Q8-v4uZamOKZCzN6r0zRMOc",
  authDomain: "fb-test-a0cbf.firebaseapp.com",
  projectId: "fb-test-a0cbf",
  storageBucket: "fb-test-a0cbf.firebasestorage.app",
  messagingSenderId: "103144879214",
  appId: "1:103144879214:web:8b24b6dae2864792cbe27f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
