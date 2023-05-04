import { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

// import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/assests/css/bootstrap.min.css";
import "../src/global.css";

import "../src/assests/css/font-awesome.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";

import { Toaster } from "react-hot-toast";

import Communities from "./components/Communities/Communities";
import Stats from "./components/Stats/Stats";
import Footer from "./components/Footer/Footer";
import Blog1 from "./components/Blogs/Blog1";
import Blog2 from "./components/Blogs/Blog2";
import Blog3 from "./components/Blogs/Blog3";
import Compete from "./components/Lets_Compete/Compete";
import E_Sports from "./components/Communities/E_Sports_Community/E_Sports";
import Coding from "./components/Communities/Coding_Community/Coding";
import Sports from "./components/Communities/Sports_Community/Sports";
import Arts from "./components/Communities/Arts_Community/Arts";
import Checkout from "./components/Checkout/Checkout";
import LogIn from "./components/LogIn_SignUp/LogIn";
import Contest from "./components/Contests/Contest";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserContext } from "./Context/UserContext";
import axios from "axios";

function App() {

  const {user,setUser} = useContext(UserContext)

  useEffect(async() => {
    await axios
    .get("http://localhost:8000/users/profile", {
      withCredentials: true,
    })
    .then((res) => {
      setUser(res.data);
    });
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Toaster position="bottom-left" reverseOrder={false} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communities" element={<Communities />} />
          <Route
            path="/stats"
            element={
              <ProtectedRoute>
                <Stats />
              </ProtectedRoute>
            }
          />
          <Route path="/blog-1" element={<Blog1 />} />
          <Route path="/blog-2" element={<Blog2 />} />
          <Route path="/blog-3" element={<Blog3 />} />
          <Route path="/compete" element={<Compete />} />
          <Route
            path="/e_sports"
            element={
              <ProtectedRoute>
                <E_Sports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coding"
            element={
              <ProtectedRoute>
                <Coding />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sports"
            element={
              <ProtectedRoute>
                <Sports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/arts"
            element={
              <ProtectedRoute>
                <Arts />
              </ProtectedRoute>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contest" element={<Contest />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
