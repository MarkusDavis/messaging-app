import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2ynfCbQcA_JOM1C1UyxKVREpeMqOngiw",
  authDomain: "twitter-clone-rs.firebaseapp.com",
  databaseURL: "https://twitter-clone-rs.firebaseio.com",
  projectId: "twitter-clone-rs",
  storageBucket: "twitter-clone-rs.appspot.com",
  messagingSenderId: "706457316866",
  appId: "1:706457316866:web:825e5b2ef54da17814811b",
  measurementId: "G-PSS7X09YHE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
