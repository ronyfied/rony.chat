"use client";

import Header from "./Header";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

import { ContextProvider } from "@/context/MessageInputContext";

function ChatRoom() {
  return (
    <ContextProvider>
      <main className="flex flex-col h-screen w-screen">
        <Header />
        <Messages />
        <MessageInput />
      </main>
    </ContextProvider>
  )
}

export default ChatRoom;