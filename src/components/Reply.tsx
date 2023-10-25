import { Tooltip } from "react-tooltip";
import { useContext } from "@/context/MessageInputContext";

function Reply({ displayName }: { displayName: string }) {
  const { messageInputValue, updateMessageInputValue } = useContext();

  return (
    <main onClick={() => updateMessageInputValue(`${messageInputValue} @${displayName}`)} className="cursor-pointer" data-tooltip-content="Mention this user" data-tooltip-id="reply" data-tooltip-delay-show={1000}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.77778 5.33334V0L0 9.33337L7.77778 18.6666V13.2C13.3333 13.2 17.2222 15.3334 20 20C18.8889 13.3334 15.5556 6.66666 7.77778 5.33334Z" fill="#ACACAC"/>
      </svg>
      <Tooltip id="reply" />
    </main>
  )
}

export default Reply;