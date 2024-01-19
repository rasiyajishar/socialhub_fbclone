// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCHFvG9Qt0NwpmRHBoFOwlrJvTwXxYkAIk",
//     authDomain: "employease-fb443.firebaseapp.com",
//     projectId: "employease-fb443",
//     storageBucket: "employease-fb443.appspot.com",
//     messagingSenderId: "465645981331",
//     appId: "1:465645981331:web:d7f1e031ab95f0c6a20766",
//     measurementId: "G-PKNDP2KVED"
// };
const firebaseConfig = {
    apiKey: "AIzaSyBLoUR5F1Vakz3gbxK2tWFXz47QBYFTCOw",
    authDomain: "socialhub-c915d.firebaseapp.com",
    projectId: "socialhub-c915d",
    storageBucket: "socialhub-c915d.appspot.com",
    messagingSenderId: "1029932603423",
    appId: "1:1029932603423:web:a880428d664984ca78dd2a",
    measurementId: "G-98BMYZF021"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider =new GoogleAuthProvider();
const analytics = getAnalytics(app);

export{auth,provider}