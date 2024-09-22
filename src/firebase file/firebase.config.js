// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfwqb6f6qYT7Q2UYKlJoyB6AHIjBxU4sU",
  authDomain: "breads-with-crud.firebaseapp.com",
  projectId: "breads-with-crud",
  storageBucket: "breads-with-crud.appspot.com",
  messagingSenderId: "1061995110881",
  appId: "1:1061995110881:web:0b3182dadd6ef3e69072a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app) 

export default(auth)