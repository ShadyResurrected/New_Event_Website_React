// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEOWB6ifps0USRQf0GTLDJbEGFgKBSkLE",
  authDomain: "event-organizers-website.firebaseapp.com",
  projectId: "event-organizers-website",
  storageBucket: "event-organizers-website.appspot.com",
  messagingSenderId: "496883520700",
  appId: "1:496883520700:web:9c32a7c958afcdebc06cb9",
  measurementId: "G-CN2JM64B3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName
        const email = result.user.email
        const Profilepic = result.user.photoURL

        localStorage.setItem("name" , name);
        localStorage.setItem("email" , email);
        localStorage.setItem("Profilepic" , Profilepic);
    }).catch((error) => {
        console.log(error);
    });
};
