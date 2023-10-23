import { Tooltip } from "react-tooltip";

function Send() {
  return (
    <button data-tooltip-content="Send message" data-tooltip-id="send" data-tooltip-delay-show={1500} className="bg-darkgray pl-4 pr-4" type="submit">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3634 10.6641L2.19812 11.4787L0.0494481 18.5692C-0.0786674 18.9884 0.0470078 19.4466 0.370332 19.7337C0.692434 20.0207 1.15 20.0811 1.53314 19.8886L19.4277 10.9475C19.778 10.7712 20 10.4048 20 10.0032C20 9.60162 19.7778 9.23526 19.4277 9.059L1.54532 0.11147C1.16219 -0.081152 0.704647 -0.0207218 0.382514 0.266323C0.0591624 0.553369 -0.0664986 1.01037 0.06163 1.42961L2.21029 8.52008L10.3597 9.33587C10.6891 9.36986 10.9405 9.65566 10.9405 9.99683C10.9405 10.338 10.6891 10.6238 10.3597 10.6578L10.3634 10.6641Z" fill="#ACACAC"/>
      </svg>
      <Tooltip id="send" />
    </button>
  )
}

export default Send;