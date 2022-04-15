import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDvoprmAKo6ziT_UulDMOD96uyJdkhw9s8",
  authDomain: "fotbal-666ef.firebaseapp.com",
  projectId: "fotbal-666ef",
  storageBucket: "fotbal-666ef.appspot.com",
  messagingSenderId: "133848297869",
  appId: "1:133848297869:web:829cdc03dfa7f01ad9cdc4"
};

  firebase.initializeApp(firebaseConfig);

  const footbalFirestore = firebase.firestore();

  const footbalAuth = firebase.auth();

  export  {footbalFirestore, footbalAuth};