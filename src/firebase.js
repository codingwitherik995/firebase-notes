import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1S4sG-9oYDeu2pvLnk7oV9ukhIbXYlCY",
  authDomain: "fir-notes-6c86b.firebaseapp.com",
  projectId: "fir-notes-6c86b",
  storageBucket: "fir-notes-6c86b.appspot.com",
  messagingSenderId: "130421174887",
  appId: "1:130421174887:web:2d68a1b38a313c2524dac2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
