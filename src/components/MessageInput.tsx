import React from "react";
import Send from "./Send";

import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { auth, signIn, messagesRef } from "@/config/firebase";
import { useContext } from "@/context/MessageInputContext";

function MessageInput() {
  const [user] = useAuthState(auth);
  const { messageInputValue, updateMessageInputValue } = useContext();

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (messageInputValue === "") return;
    updateMessageInputValue("");

    await addDoc(messagesRef, {
      content: messageInputValue,
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
          <input className="w-full h-16 bg-darkgray pl-6 focus:outline-none placeholder:text-lightgray" placeholder="Say something nice" type="text" value={messageInputValue} onChange={(change) => updateMessageInputValue(change.target.value)} />
          <Send />
        </main>
      ) : (
        <button className="w-full text-start h-16 bg-darkgray pl-6 pr-6 text-white" type="button" onClick={signIn}>Sign in to chat</button>
      )}
    </form>
  )
}

export default MessageInput;