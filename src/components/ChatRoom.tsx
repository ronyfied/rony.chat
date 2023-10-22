"use client";

import Header from "./Header";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

function ChatRoom() {
  return (
    <main>
      <Header />
      <Messages />
      <MessageInput />
    </main>
  )
}

export default ChatRoom;