// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaXfeLHWLcT1AlwCGQdiOBuVGyrrm3MSE",
  authDomain: "fir-login-2db62.firebaseapp.com",
  projectId: "fir-login-2db62",
  storageBucket: "fir-login-2db62.appspot.com",
  messagingSenderId: "24263958573",
  appId: "1:24263958573:web:2395989c6c6560fae798a4",
  measurementId: "G-Q57Y7SXPQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)