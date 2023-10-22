import { Tooltip } from "react-tooltip";
import { messagesRef } from "@/config/firebase";
import { doc, deleteDoc } from "firebase/firestore";

interface Props {
  msgId: string
}

function Delete({ msgId }: Props) {
  const deleteMessage = async () => {
    await deleteDoc(doc(messagesRef, msgId));
  }

  return (
    <main className="cursor-pointer" onClick={deleteMessage} data-tooltip-content="Delete this message" data-tooltip-id="delete" data-tooltip-delay-show={1500}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5714 3.5687V0H7.42857V3.5687H0V7.13865H24V3.5687H16.5714Z" fill="#F53636"/>
        <path d="M2.66667 8.40162V21.4735C2.66667 22.8656 3.86267 24 5.33334 24H18.6667C20.1373 24 21.3333 22.8656 21.3333 21.4735V8.40162H2.66667ZM10.0952 19.47H6.33541V11.8906H10.0952V19.47ZM17.6646 19.47H13.9048V11.8906H17.6646V19.47Z" fill="#F53636"/>
      </svg>
      <Tooltip id="delete" />
    </main>
  )
}

export default Delete;