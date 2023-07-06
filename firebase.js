// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2tJSvuqLZcuYFoVngAEinQoe1QReWb_c",
  authDomain: "new--clone-31c95.firebaseapp.com",
  projectId: "new--clone-31c95",
  storageBucket: "new--clone-31c95.appspot.com",
  messagingSenderId: "236795728937",
  appId: "1:236795728937:web:11b75072c91346dae83838",
  measurementId: "G-FHNS1X6W4S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
