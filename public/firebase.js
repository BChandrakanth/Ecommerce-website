import firebase from "firebase/compat/app";
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoNFR9xTuysxQj0grugD9m_yLIBjMWITQ",
  authDomain: "clone-f08a0.firebaseapp.com",
  projectId: "clone-f08a0",
  storageBucket: "clone-f08a0.appspot.com",
  messagingSenderId: "522686819542",
  appId: "1:522686819542:web:9e917c6bad09e287b8ed77",
  measurementId: "G-1670173D5D"
};
// Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
console.log(getDatabase(),"database");
export default firebaseDB.database().ref();
