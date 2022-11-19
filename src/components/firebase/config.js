// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9wxLKqTXRZs48G9q3JZwmtR6s3FqeT6I",
  authDomain: "crimsomgamers.firebaseapp.com",
  projectId: "crimsomgamers",
  storageBucket: "crimsomgamers.appspot.com",
  messagingSenderId: "970187655119",
  appId: "1:970187655119:web:0b5405d6b771fe568474ba",
  measurementId: "G-4D8LGRV434",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
