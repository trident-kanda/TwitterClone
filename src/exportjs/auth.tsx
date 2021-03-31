import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAip00AXCY2b7Ou9-LSZkPFCh5PMuABWVM",
  authDomain: "twittercloneproject1.firebaseapp.com",
  projectId: "twittercloneproject1",
  storageBucket: "twittercloneproject1.appspot.com",
  messagingSenderId: "691390350934",
  appId: "1:691390350934:web:1d7b942e821d5b4b3c9df7",
  measurementId: "G-VS8LBPCHZ7",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

export default auth;
