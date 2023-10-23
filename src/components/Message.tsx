import Delete from "./Delete";
import Reply from "./Reply";

import { auth } from "@/config/firebase";

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
    <main className={`group w-full flex justify-between items-center pt-3 pr-4 pb-3 pl-4 ${content.includes(`@${auth.currentUser?.displayName}`) ? "bg-brown hover:bg-lightbrown" : "hover:bg-darkergray"}`}>
      <div className="flex gap-4">
        <img className="w-10 h-10 rounded-full cursor-pointer" src={photoURL} alt="Profile Picture" />
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <h1 className="cursor-pointer">{displayName}</h1>
            <h1 className="text-slategray text-sm cursor-default">{timestamp}</h1>
          </div>
          <p className="text-lightgray break-words">{content}</p>
        </div>
      </div>
      <div className="flex gap-4 invisible group-hover:visible">
        <Reply displayName={displayName} />
        {auth.currentUser?.uid === uId ? (
          <Delete msgId={msgId} />
        ) : (
          null
        )}
      </div>
    </main>
  )
}

export default Message;