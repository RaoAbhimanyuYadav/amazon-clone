import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhyrOz7o8QR4g7faSmm991mCgXJjHVGbs",
  authDomain: "amazo1.firebaseapp.com",
  projectId: "amazo1",
  storageBucket: "amazo1.appspot.com",
  messagingSenderId: "262029681349",
  appId: "1:262029681349:web:17bea7ea8c6d1af7a406ac",
  measurementId: "G-PPQ8DHNF09",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
