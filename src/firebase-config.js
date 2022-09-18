import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "arch-7d083.firebaseapp.com",
    projectId: "arch-7d083",
    storageBucket: "arch-7d083.appspot.com",
    messagingSenderId: "53125519148",
    appId: "1:53125519148:web:51c1d05babc38b29507e89"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);