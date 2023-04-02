import React, { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  function signInWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }


  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubsribe();
    };
  }, []);

  const value = {
    user,
    signInWithGoogle,
    isAuthorized,
    setIsAuthorized,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
