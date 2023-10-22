import { Tooltip } from "react-tooltip";
import { auth, signIn, signOut } from "@/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <main className="flex w-full h-16 bg-darkgray fixed justify-between items-center pl-6 pr-6">
      <h1>21 Online</h1>
      {user ? (
        <main data-tooltip-content="Sign out of your account" data-tooltip-id="sign-out" data-tooltip-delay-show={1500}>
          <button onClick={signOut}>Sign Out</button>
          <Tooltip id="sign-out" />
        </main>
      ) : (
        <main data-tooltip-content="Sign in to your account" data-tooltip-id="sign-in" data-tooltip-delay-show={1500}>
          <button onClick={signIn}>Sign In</button>
          <Tooltip id="sign-in" />
        </main>
      )}
    </main>
  )
}

export default Header;