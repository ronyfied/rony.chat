"use client";

import Header from "./Header";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

import { ContextProvider } from "@/context/MessageInputContext";

function ChatRoom() {
  return (
    <main className="flex flex-col h-screen w-screen">
      <Header />
      <ContextProvider>
        <Messages />
        <MessageInput />
      </ContextProvider>
    </main>
  )
}

export default ChatRoom;