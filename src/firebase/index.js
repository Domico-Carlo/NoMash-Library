// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPEmTk08A2b6cp1iYhByN6bebMtRvNTfw",
  authDomain: "week7-domico.firebaseapp.com",
  projectId: "week7-domico",
  storageBucket: "week7-domico.firebasestorage.app",
  messagingSenderId: "625491366372",
  appId: "1:625491366372:web:ec095ee6e096af24a537f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;