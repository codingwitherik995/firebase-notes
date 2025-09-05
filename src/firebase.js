import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0Rg_IE2n-WK28RLmklSDAIaOuwbApI0Q",
  authDomain: "notes-ca4fd.firebaseapp.com",
  projectId: "notes-ca4fd",
  storageBucket: "notes-ca4fd.firebasestorage.app",
  messagingSenderId: "809646133858",
  appId: "1:809646133858:web:f439aa5f65b9550ff1b73b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
