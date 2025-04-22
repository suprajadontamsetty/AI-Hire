// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC4xNGkEvdo069EpicNCto6PbYNyqXJWg",
  authDomain: "ai-hire-bc913.firebaseapp.com",
  projectId: "ai-hire-bc913",
  storageBucket: "ai-hire-bc913.firebasestorage.app",
  messagingSenderId: "577301290261",
  appId: "1:577301290261:web:a44d1f9ae71019dfca9d1c",
  measurementId: "G-SB7KZ3RPXS"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig):getApp();
export const auth =  getAuth(app);
export const db=getFirestore(app);