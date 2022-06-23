// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4u7PYY0qPxRKxluz-3JTI7u5bPT9yhbU",
  authDomain: "utakio-b67b7.firebaseapp.com",
  projectId: "utakio-b67b7",
  storageBucket: "utakio-b67b7.appspot.com",
  messagingSenderId: "658478039893",
  appId: "1:658478039893:web:40fabebf778ce9db4ca5dc",
  measurementId: "G-YBFNMQSZBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);