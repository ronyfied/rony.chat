import React from "react";
import Send from "./Send";

import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { auth, signIn, messagesRef } from "@/config/firebase";

function MessageInput() {
  const [user] = useAuthState(auth);
  const [message, setMessage] = React.useState("");

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (message === "") return;
    setMessage("");

    await addDoc(messagesRef, {
      content: message,
      createdAt: serverTimestamp(),
      timestamp: `${new Date()}`,
      displayName: auth.currentUser?.displayName,
      photoURL: auth.currentUser?.photoURL,
      uId: auth.currentUser?.uid
    });
  }

  return (
    <form onSubmit={sendMessage} className="w-full">
      {user ? (
        <main className="w-full flex">
          <input className="w-full h-16 bg-darkgray pl-6 focus:outline-none placeholder:text-lightgray" placeholder="Say something nice" type="text" value={message} onChange={(change) => setMessage(change.target.value)} />
          <Send />
        </main>
      ) : (
        <button className="w-full text-start h-16 bg-darkgray pl-6 pr-6 text-white" type="button" onClick={signIn}>Sign in to chat</button>
      )}
    </form>
  )
}

export default MessageInput;