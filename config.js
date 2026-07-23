// config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥🔥🔥 بياناتك بالضبط (من اللقطة اللي بعتها) 🔥🔥🔥
const firebaseConfig = {
  apiKey: "AIzaSyBvNcTEgRq_ghnGNnkTzF39q0fz-xnZbts",
  authDomain: "prfum-b8275.firebaseapp.com",
  databaseURL: "https://prfum-b8275-default-rtdb.firebaseio.com",
  projectId: "prfum-b8275",
  storageBucket: "prfum-b8275.firebasestorage.app",
  messagingSenderId: "913134396732",
  appId: "1:913134396732:web:1964110a9204ea14e06a39",
  measurementId: "G-2428ZKY9LR"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, ref, set, push, onValue, remove, update, auth, signInWithEmailAndPassword, onAuthStateChanged, signOut };
