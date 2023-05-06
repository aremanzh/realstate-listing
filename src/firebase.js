// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5W0EbeMRVa3FCD7qnhHHR2MNgBf2VWsA",
  authDomain: "realstate-world-react.firebaseapp.com",
  projectId: "realstate-world-react",
  storageBucket: "realstate-world-react.appspot.com",
  messagingSenderId: "93436606421",
  appId: "1:93436606421:web:05513e7b864dda3742ef5c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();