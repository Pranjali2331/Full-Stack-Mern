// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "full-stack-real-estate.firebaseapp.com",
  projectId: "full-stack-real-estate",
  storageBucket: "full-stack-real-estate.appspot.com",
  messagingSenderId: "423105780007",
  appId: "1:423105780007:web:02f57f7af40d1e0231b102"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



// AIzaSyAFDbJWML_RKLY-gGNMBHTV6YKF-dpw9e8