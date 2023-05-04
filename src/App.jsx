import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

// import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/assests/css/bootstrap.min.css";
import "../src/global.css";

import "../src/assests/css/font-awesome.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { UserContext } from "./Context/UserContext";
import axios from "axios";

import Home from "./components/Home/Home";
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

function App() {
  const { setUser, BASE_URL, user } = useContext(UserContext);

  useEffect(async () => {
    await axios
      .get(`${BASE_URL}/users/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Toaster position="bottom-left" reverseOrder={false} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/stats" element={user?._id ? <Stats /> : <LogIn />} />
          <Route path="/blog-1" element={<Blog1 />} />
          <Route path="/blog-2" element={<Blog2 />} />
          <Route path="/blog-3" element={<Blog3 />} />
          <Route path="/compete" element={<Compete />} />
          <Route
            path="/e_sports"
            element={user?._id ? <E_Sports /> : <LogIn />}
          />
          <Route path="/coding" element={user?._id ? <Coding /> : <LogIn />} />
          <Route path="/sports" element={user?._id ? <Sports /> : <LogIn />} />
          <Route path="/arts" element={user?._id ? <Arts /> : <LogIn />} />
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
