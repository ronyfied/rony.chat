import { Tooltip } from "react-tooltip";

function Send() {
  return (
    <button data-tooltip-content="Send message" data-tooltip-id="send" data-tooltip-delay-show={1500} className="bg-darkgray pl-6 pr-6" type="submit">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4361 12.797L2.63775 13.7744L0.0593377 22.283C-0.0944009 22.7861 0.0564094 23.3359 0.444398 23.6805C0.83092 24.0248 1.38 24.0974 1.83977 23.8663L23.3133 13.1369C23.7336 12.9254 24 12.4858 24 12.0039C24 11.5219 23.7334 11.0823 23.3133 10.8708L1.85439 0.133764C1.39463 -0.0973824 0.845576 -0.0248662 0.459016 0.319587C0.0709949 0.664042 -0.0797983 1.21245 0.073956 1.71553L2.65235 10.2241L12.4316 11.203C12.8269 11.2438 13.1286 11.5868 13.1286 11.9962C13.1286 12.4056 12.827 12.7485 12.4316 12.7893L12.4361 12.797Z" fill="#ACACAC"/>
      </svg>
      <Tooltip id="send" />
    </button>
  )
}

export default Send;