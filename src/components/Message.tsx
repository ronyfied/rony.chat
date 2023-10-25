import Reply from "./Reply";
import Delete from "./Delete";
import getTimestamp from "@/functions/getTimestamp";
import localDateAndTime from "@/functions/localDateAndTime";

import { mods } from "@/mods.json";
import { auth } from "@/config/firebase";
import { Tooltip } from "react-tooltip";

interface Props {
  content: string,
  timestamp: string,
  displayName: string,
  photoURL: string,
  uId: string,
  msgId: string
}

function Message({ content, displayName, msgId, photoURL, timestamp, uId }: Props) {
  return (
    <main className={`group w-full flex justify-between items-center pt-1 pr-4 pb-1 pl-4 ${content.includes(`@${auth.currentUser?.displayName}`) ? "bg-brown hover:bg-lightbrown" : "hover:bg-darkergray"}`}>
      <div className="flex gap-4">
        <img className="w-10 h-10 rounded-full cursor-pointer" src={photoURL} alt="Profile Picture" />
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <h1 className="cursor-pointer">{displayName}</h1>
            <div data-tooltip-content={localDateAndTime(timestamp)} data-tooltip-id="reply" data-tooltip-delay-show={1000}>
              <h1 className="text-slategray text-sm cursor-default">{getTimestamp(timestamp, false)}</h1>
              <Tooltip id="timestamp" />
            </div>
          </div>
          <p className="text-lightgray break-words">{content}</p>
        </div>
      </div>
      <div className="flex gap-3 invisible group-hover:visible">
        {auth.currentUser ? <Reply displayName={displayName} /> : null}
        {auth.currentUser?.uid === uId || mods.includes(`${auth.currentUser?.uid}`) ? (
          <Delete msgId={msgId} />
        ) : (
          null
        )}
      </div>
    </main>
  )
}

export default Message;