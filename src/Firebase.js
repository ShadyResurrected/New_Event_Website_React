// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

// export const signInWithGoogle =async () => {
//     fetch('http://locahost:8000/api/create-update-user',{
//         headers: {
//                              'Accept': 'application/json',
//                              'Content-Type': 'application/json',
//                              'authtoken': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZmOGUxY2IxNTY0MTQ2M2M2ZGYwZjMzMzk0YjAzYzkyZmNjODg5YWMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQ2hhbmRyYWRlZXAgQ2hhbmRyYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHakpBWjhuYmFkejBOQ1lvR1M5ZlJzelNEZU1zYVNPZGVSTmp6WnB4Zz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9ldmVudC1vcmdhbml6ZXJzLXdlYnNpdGUiLCJhdWQiOiJldmVudC1vcmdhbml6ZXJzLXdlYnNpdGUiLCJhdXRoX3RpbWUiOjE2NTM1NDA1NDUsInVzZXJfaWQiOiJ5Y041eFZKT3dvZ3ZLNHhvQ2R0WUl6T1h5enMxIiwic3ViIjoieWNONXhWSk93b2d2SzR4b0NkdFlJek9YeXpzMSIsImlhdCI6MTY1MzU0MDU0NSwiZXhwIjoxNjUzNTQ0MTQ1LCJlbWFpbCI6ImNjaGFuZHJhNTU0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA2NTQzMjQ1MzMzMTM1NjczNTQ4Il0sImVtYWlsIjpbImNjaGFuZHJhNTU0QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.NsVgFwjTxIem50vIqKSmkIj_GEpBdBX2gtMWDorvpQni83Y2wCWFm3BDazOo6VI2zv5rCHStZwCcd6xVUjdANPW5ShEeMXtEhKTxjX4IFTMkcni0uoMt5zgsNQ86ZZNy-OUQ9BxQ2nTgpSkKx0y4iUmSkjIYCuQZn-IShG3vNE56Bol6tqTos28qMq5yL7nTRe8F1mUcu_L0td1sJrXC1l8Jym4cfo3Q9l1CQUjH9hgLHQS6qKJU_yICp-0mCtoyArUK9IOvygpaArvr9CUvodXoCgPFVWuTjYRu2dCv0hOLQhEfuC2NmuAiOkxcU54eBAroAtFz1xLLs0QVEJIkQA'
//                            },
//                          method: "POST",
//     }).then( async(res) => {
//         console.log(res)
//     }).catch((err) =>{
//         console.log(err)
//     })
//     signInWithPopup(auth, provider).then(async (result) => {
//         const {user} = result;
//         const idTokenRes = await user.getIdTokenResult();
//         console.log(idTokenRes)
//         if(idTokenRes){
//             await fetch('http://43.204.123.100/api/create-update-user', {
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'authtoken': idTokenRes
//                   },
//                   method: "POST",
//             }).then((res) =>{
//                 console.log(res)
//                 return res;
//             }).catch((err) => {
//                 console.log(err)
//             })
//         }
//         const name = result.user.displayName
//         const email = result.user.email
//         const Profilepic = result.user.photoURL

//         await localStorage.setItem("name" , name);
//         await localStorage.setItem("email" , email);
//         await localStorage.setItem("Profilepic" , Profilepic);
//     }).catch((error) => {
//         console.log(error);
//     });
// };

export const signInWithGoogle = async() => {
  await signInWithPopup(auth, provider)
    .then(async (result) => {
      // const { user } = result;
      // const idToken = await user.getIdToken();
      // console.log(idToken);
      // const res = await fetch('http://43.204.123.100/api/create-update-user', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //     authtoken: idToken,
      //   },
      // });
      // console.log(await res.json());
      // const data = await res.json();
      // console.log(data.body);
      // if (data && data.status == 'success') {
      //   await localStorage.setItem("name", result.user.displayName);
      //   return 1;
      // }
      //   console.log("Failed to log in!");
      //   return 0;
      

      const name = result.user.displayName
      const email = result.user.email
      const Profilepic = result.user.photoURL

      localStorage.setItem("name" , name);
      localStorage.setItem("email" , email);
      localStorage.setItem("Profilepic" , Profilepic);
    })
    .catch((error) => {
      console.log(error);
      return 0;
    });
};