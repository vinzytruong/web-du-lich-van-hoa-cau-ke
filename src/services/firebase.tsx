import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAaoOykOifkaAi7fQJzt4fJiJ69PwGaGPM",
    authDomain: "du-lich-cau-ke.firebaseapp.com",
    projectId: "du-lich-cau-ke",
    storageBucket: "du-lich-cau-ke.appspot.com",
    messagingSenderId: "970895108292",
    appId: "1:970895108292:web:3fe9a275ddbaddf7d60191",
    measurementId: "G-9HVRXPNJG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);


