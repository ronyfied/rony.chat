import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjV2h_kDL3f7U3ksh0oVEysd_Ty2ML5ZE",
  authDomain: "ronychat.firebaseapp.com",
  projectId: "ronychat",
  storageBucket: "ronychat.appspot.com",
  messagingSenderId: "80789566769",
  appId: "1:80789566769:web:8ab146f5b921089ee62c10",
  measurementId: "G-407L2GZD9E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();

export const signIn = async () => {
  const provider = new GoogleAuthProvider();

  await signInWithRedirect(auth, provider);
}

export const signOut = async () => {
  await auth.signOut();

  window.location.reload();
}

export const messagesRef = collection(db, "messages");

// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);