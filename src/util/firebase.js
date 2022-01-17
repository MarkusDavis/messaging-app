import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCu1oR_wPei8unrL6PJ1tXoha9Ls50mQ2U",
  authDomain: "markusdavisdev.firebaseapp.com",
  databaseURL: "https://markusdavisdev-default-rtdb.firebaseio.com",
  projectId: "markusdavisdev",
  storageBucket: "markusdavisdev.appspot.com",
  messagingSenderId: "130879870695",
  appId: "1:130879870695:web:1191cafcc4701aa4a53442",
  measurementId: "G-FELL7129K1" 
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
