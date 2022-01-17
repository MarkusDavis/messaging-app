import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import firebase from "firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyA6DxSIjeQDnXQkSDrJNApDkW8N_fB3q34",
  authDomain: "firelucent.firebaseapp.com",
  databaseURL: "https://firelucent-default-rtdb.firebaseio.com",
  projectId: "firelucent",
  storageBucket: "firelucent.appspot.com",
  messagingSenderId: "707707824794",
  appId: "1:707707824794:web:bf19ecb65ce7ae5b350d23",
  measurementId: "G-8LR09JT7ZR",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {}
function SignOut() {}
function ChatRoom() {}
function ChatMessage() {}
