import React from "react";
import Send from "./Send";

import { useContext } from "@/context/MessageInputContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { auth, signIn, messagesRef } from "@/config/firebase";

import useCountDown from "react-countdown-hook";

function MessageInput() {
  const [user] = useAuthState(auth);
  const [timeLeft, { start, reset }] = useCountDown(10 * 1000, 1000);

  const { messageInputValue, updateMessageInputValue } = useContext();

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (timeLeft === 0) {
      reset();
    }

    inputRef.current?.focus();
  }, [timeLeft]);

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (messageInputValue === "") return;
    updateMessageInputValue("");

    start();

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
          <input className="w-full h-16 bg-darkgray pl-6 focus:outline-none placeholder:text-lightgray" disabled={timeLeft === 0 ? false : true} placeholder={timeLeft === 0 ? "Say something nice" : `Wait ${Math.floor(timeLeft / 1000)} seconds`} type="text" value={messageInputValue} onChange={(change) => updateMessageInputValue(change.target.value)} ref={inputRef} />
          <Send />
        </main>
      ) : (
        <button className="w-full text-start h-16 bg-darkgray pl-6 pr-6 text-white" type="button" onClick={signIn}>Sign in to chat</button>
      )}
    </form>
  )
}

export default MessageInput;