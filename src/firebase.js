// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4rmxYLEEicQuyD82S-AMCD6t8Em8svUE",
  authDomain: "ictu-votingsystem.firebaseapp.com",
  projectId: "ictu-votingsystem",
  storageBucket: "ictu-votingsystem.appspot.com",
  messagingSenderId: "596818382551",
  appId: "1:596818382551:web:08a8a89b4757c6ccd26a92",
  measurementId: "G-06C8H98Z7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=  getFirestore(app);

export {db};