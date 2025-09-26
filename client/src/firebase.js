// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f8a9a.firebaseapp.com",
  projectId: "mern-estate-f8a9a",
  storageBucket: "mern-estate-f8a9a.firebasestorage.app",
  messagingSenderId: "356758786619",
  appId: "1:356758786619:web:ec4d4540727791bfb6c21e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// AIzaSyAFDbJWML_RKLY-gGNMBHTV6YKF-dpw9e8