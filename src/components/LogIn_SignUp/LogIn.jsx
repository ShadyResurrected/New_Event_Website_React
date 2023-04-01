import React, { useContext, useState } from "react";

import "../LogIn_SignUp/login.css";

import { FcGoogle, FcPhoneAndroid } from "react-icons/fc";

import { useAuth } from "../../Context/AuthContext";

const LogIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => setIsSignUp(true);
  const handleSignInClick = () => setIsSignUp(false);

  const {signInWithGoogle} = useAuth()

  const handleAnchorClick = () => {
    signInWithGoogle() 
  }

  return (
    <div className="parent__container">
      <div
        className={`container__main ${isSignUp ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social" >
                <FcGoogle />
              </a>
              <a href="#" className="social">
                <FcPhoneAndroid />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button className="sign_btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social" onClick={handleAnchorClick}>
                <FcGoogle />
              </a>
              <a href="#" className="social">
                <FcPhoneAndroid />
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot_pass">
              Forgot your password?
            </a>
            <button className="sign_btn">
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
