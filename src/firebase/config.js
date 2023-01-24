// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXF2DwA0I_cUph6UD3jh6Y69kiPt6GLfM",
  authDomain: "supernovastore-bfec4.firebaseapp.com",
  projectId: "supernovastore-bfec4",
  storageBucket: "supernovastore-bfec4.appspot.com",
  messagingSenderId: "544355434286",
  appId: "1:544355434286:web:c5f7209c41bfbdd6ea84bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);