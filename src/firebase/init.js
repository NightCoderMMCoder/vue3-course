import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyAZ_TYBNvgvWNIBm1-AN0HT2M-0PEno4YY",
  authDomain: "chat-app-d665b.firebaseapp.com",
  projectId: "chat-app-d665b",
  storageBucket: "chat-app-d665b.appspot.com",
  messagingSenderId: "932881968752",
  appId: "1:932881968752:web:c6a950b85834a999d64eb5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let firebaseAuth = firebase.auth();
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseAuth, db, timestamp };
