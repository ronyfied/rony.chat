import { Tooltip } from "react-tooltip";
import { messagesRef } from "@/config/firebase";
import { doc, deleteDoc } from "firebase/firestore";

function Delete({ msgId }: { msgId: string }) {
  const deleteMessage = async () => {
    await deleteDoc(doc(messagesRef, msgId));
  }

  return (
    <main className="cursor-pointer" onClick={deleteMessage} data-tooltip-content="Delete this message" data-tooltip-id="delete" data-tooltip-delay-show={1000}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8095 2.97391V0H6.19048V2.97391H0V5.94888H20V2.97391H13.8095Z" fill="#F53636"/>
        <path d="M2.22223 7.00135V17.8946C2.22223 19.0547 3.21889 20 4.44445 20H15.5556C16.7811 20 17.7778 19.0547 17.7778 17.8946V7.00135H2.22223ZM8.4127 16.225H5.27951V9.90883H8.4127V16.225ZM14.7205 16.225H11.5873V9.90883H14.7205V16.225Z" fill="#F53636"/>
      </svg>
      <Tooltip id="delete" />
    </main>
  )
}

export default Delete;