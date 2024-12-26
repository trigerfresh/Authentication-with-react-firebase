// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk1M1bsIbJmBIynUJdiC2ncT0wmJe5btY",
  authDomain: "auth-with-react-7b7de.firebaseapp.com",
  projectId: "auth-with-react-7b7de",
  storageBucket: "auth-with-react-7b7de.firebasestorage.app",
  messagingSenderId: "258096319203",
  appId: "1:258096319203:web:8987c161c0ef761a8853d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};