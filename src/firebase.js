import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApDeRJUEDpsr2Spv_LPV335bL7ZWpAgUQ",
  authDomain: "fir-notes-a8cba.firebaseapp.com",
  projectId: "fir-notes-a8cba",
  storageBucket: "fir-notes-a8cba.firebasestorage.app",
  messagingSenderId: "1076220944243",
  appId: "1:1076220944243:web:f6a19afc5e3e37fa716f06",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
