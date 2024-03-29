import React, { useContext, useState } from "react";

import "../LogIn_SignUp/login.css";

import { FcGoogle, FcPhoneAndroid } from "react-icons/fc";

import { UserContext } from "../../Context/UserContext";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const LogIn = () => {
  // General
  const navigate = useNavigate();

  // Form transition
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSignUpClick = () => setIsSignUp(true);
  const handleSignInClick = () => setIsSignUp(false);

  // Sign Up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  // Sign In
  const [emailS, setEmailS] = useState("");
  const [passwordS, setPasswordS] = useState("");

  const { setUser, BASE_URL, googleSignIn } = useContext(UserContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (name === "" || username === "" || email === "" || password === "")
      return toast.error("Kindly Fill all the fields");
    try {
      const res = await axios.post(
        `${BASE_URL}/users/register`,
        {
          name,
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success === true) {
        setEmail("");
        setName("");
        setUsername("");
        setPassword("");

        await axios
          .get(`${BASE_URL}/users/profile`, {
            withCredentials: true, // Set withCredentials to true to receive the cookie
          })
          .then((res) => {
            setUser(res.data);
          });

        toast.success(res.data.message);
        return navigate("/");
      }

      toast.error(res.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (emailS === "" || passwordS === "")
      return toast.error("Kindly Fill all the fields");

    try {
      const res = await axios.post(
        `${BASE_URL}/users/login`,
        {
          email: emailS,
          password: passwordS,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success === true) {
        setEmailS("");
        setPasswordS("");

        await axios
          .get(`${BASE_URL}/users/profile`, {
            withCredentials: true, // Set withCredentials to true to receive the cookie
          })
          .then((res) => {
            setUser(res.data);
          });

        toast.success(res.data.message);
        return navigate("/");
      }

      toast.error(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await googleSignIn();
      const { displayName, email, uid, photoURL, providerId } = response.user;
      const username = email.split("@")[0];
      // console.log(response.user);
      const res = await axios.post(
        `${BASE_URL}/users/register`,
        {
          name: displayName,
          username: username,
          email: email,
          password: uid,
          profilePic: photoURL,
          providerId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success === true) {
        setEmail("");
        setName("");
        setUsername("");
        setPassword("");

        await axios
          .get(`${BASE_URL}/users/profile`, {
            withCredentials: true, // Set withCredentials to true to receive the cookie
          })
          .then((res) => {
            setUser(res.data);
          });
        toast.success(res.data.message);
        return navigate("/");
      }

      // Already registered with google
      if (res.data.message === "Email already registered with google") {
        const res = await axios.post(
          `${BASE_URL}/users/login`,
          {
            email,
            password: uid,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (res.data.success === true) {
          await axios
            .get(`${BASE_URL}/users/profile`, {
              withCredentials: true, // Set withCredentials to true to receive the cookie
            })
            .then((res) => {
              setUser(res.data);
            });
          toast.success(res.data.message);
          return navigate("/");
        }
      }

      toast.error(res.data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handlePhoneSignIn = () => {
    signInWithPhone();
  };

  return (
    <div className="parent__container">
      <div
        className={`container__main ${isSignUp ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Enter Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="sign_btn" onClick={handleSignUp}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social" onClick={handleGoogleSignIn}>
                <FcGoogle />
              </a>
              <a href="#" className="social" onClick={handlePhoneSignIn}>
                <FcPhoneAndroid />
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmailS(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPasswordS(e.target.value)}
            />
            <a href="#" className="forgot_pass">
              Forgot your password?
            </a>
            <button className="sign_btn" onClick={handleSignIn}>
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost sign_btn"
                id="signIn"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost sign_btn"
                id="signUp"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
