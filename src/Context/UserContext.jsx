import { createContext, useState } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const BASE_URL = import.meta.env.VITE_SERVER_URL;

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <UserContext.Provider value={{ user, setUser, BASE_URL, googleSignIn }}>
      {children}
    </UserContext.Provider>
  );
};
