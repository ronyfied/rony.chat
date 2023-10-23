"use client";

import Header from "./Header";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

function ChatRoom() {
  return (
    <main className="flex flex-col h-screen w-screen">
      <Header />
      <Messages />
      <MessageInput />
    </main>
  )
}

export default ChatRoom;