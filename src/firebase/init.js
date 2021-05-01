import firebase from "firebase/app";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyBJr49d_Wjlenk1W5xg9Eap2IusaffAg9s",
  authDomain: "chat-app-d665b.firebaseapp.com",
  projectId: "chat-app-d665b",
  storageBucket: "chat-app-d665b.appspot.com",
  messagingSenderId: "932881968752",
  appId: "1:932881968752:web:c6a950b85834a999d64eb5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let firebaseAuth = firebase.auth();

export { firebaseAuth };
