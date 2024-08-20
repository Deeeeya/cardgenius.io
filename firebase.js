// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOvjD0lSp8xwxIpKnxXPu1dFkdE27T-ik",
  authDomain: "flashcardsaas-51f26.firebaseapp.com",
  projectId: "flashcardsaas-51f26",
  storageBucket: "flashcardsaas-51f26.appspot.com",
  messagingSenderId: "928357549667",
  appId: "1:928357549667:web:6bd4fc8f08b316bbc69a56",
  measurementId: "G-F73G5F3RXJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
