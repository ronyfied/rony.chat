import { Tooltip } from "react-tooltip";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signIn, signOut } from "@/config/firebase";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <main className="flex w-full h-16 bg-darkgray justify-between items-center pl-6 pr-6">
      <h1>RonyChat</h1>
      {user ? (
        <main data-tooltip-content="Sign out of your account" data-tooltip-id="sign-out" data-tooltip-delay-show={1000}>
          <button onClick={signOut}>Sign Out</button>
          <Tooltip id="sign-out" />
        </main>
      ) : (
        <main data-tooltip-content="Sign in to your account" data-tooltip-id="sign-in" data-tooltip-delay-show={1000}>
          <button onClick={signIn}>Sign In</button>
          <Tooltip id="sign-in" />
        </main>
      )}
    </main>
  )
}

export default Header;