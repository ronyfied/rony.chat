import { Tooltip } from "react-tooltip";

function Reply() {
  return (
    <main className="cursor-pointer" data-tooltip-content="Mention this user" data-tooltip-id="reply" data-tooltip-delay-show={1500}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.33333 6.40001V0L0 11.2L9.33333 22.4V15.84C16 15.84 20.6667 18.4 24 24C22.6667 16 18.6667 8 9.33333 6.40001Z" fill="#ACACAC"/>
      </svg>
      <Tooltip id="reply" />
    </main>
  )
}

export default Reply;