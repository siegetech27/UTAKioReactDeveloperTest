import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyC4u7PYY0qPxRKxluz-3JTI7u5bPT9yhbU",
  authDomain: "utakio-b67b7.firebaseapp.com",
  databaseURL: "https://utakio-b67b7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "utakio-b67b7",
  storageBucket: "utakio-b67b7.appspot.com",
  messagingSenderId: "658478039893",
  appId: "1:658478039893:web:40fabebf778ce9db4ca5dc",
  measurementId: "G-YBFNMQSZBK"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;