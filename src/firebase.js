import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_authDomain,
    projectId: import.meta.env.VITE_FIREBASE_projectId,
    storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
    messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
    appId: import.meta.env.VITE_FIREBASE_appId
})

export const auth = getAuth(app)
export default app