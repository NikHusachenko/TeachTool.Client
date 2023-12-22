import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArihEEoDQwF2fnGIryjm7NDxSvh-eo_bI",
  authDomain: "kursachcrm.firebaseapp.com",
  projectId: "kursachcrm",
  storageBucket: "kursachcrm.appspot.com",
  messagingSenderId: "283087929770",
  appId: "1:283087929770:web:44560365b22d22496a6bd3",
  measurementId: "G-8SRETR238E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app , db};