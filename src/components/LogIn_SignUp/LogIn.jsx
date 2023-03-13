import React, { useState, useRef } from "react";

import { Alert } from "react-bootstrap";

import "../LogIn_SignUp/login.css";

import {FcGoogle,FcPhoneAndroid} from 'react-icons/fc'

import { useAuth } from "../../Context/AuthContext";

const LogIn = () => {
  const singUpEmailRef = useRef();
  const singUpPasswordRef = useRef();
  const passwordConfirmRef = useRef();

  const singnInEmailRef = useRef();
  const singnInPasswordRef = useRef();

  const [isSignUp, setIsSignUp] = useState(false);
  const [signuperror, setSignuperror] = useState("");
  const [signinerror, setSigninerror] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUpClick = () => setIsSignUp(true);
  const handleSignInClick = () => setIsSignUp(false);

  const { signup, signin } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    // Passwords are same
    if (singUpPasswordRef.current.value !== passwordConfirmRef.current.value) {
      return setSignuperror("Passwords do not match");
    }

    try {
      setSignuperror("");
      setLoading(true);
      const user = await signup(
        singUpEmailRef.current.value,
        singUpPasswordRef.current.value
      );
      console.log(user)
    } catch {
      setSignuperror("Failed to create an account");
    }

    setLoading(false);
  }

  async function handleSubmitSignIn(e) {
    e.preventDefault();
  
    try {
      setSigninerror("");
      setLoading(true);
      await signin(
        singnInEmailRef.current.value,
        singnInPasswordRef.current.value
      );
    } catch(error) {
      setSigninerror("Failed to log in");
      console.log(error.code);
    }
  
    setLoading(false);
  }

  return (
    <div className="parent__container">
      <div
        className={`container__main ${isSignUp ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          {signuperror && <Alert variant="danger">{signuperror} </Alert>}
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <FcGoogle/>
              </a>
              <a href="#" className="social">
                <FcPhoneAndroid/>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="email" placeholder="Email" ref={singUpEmailRef} />
            <input
              type="password"
              placeholder="Password"
              ref={singUpPasswordRef}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              ref={passwordConfirmRef}
            />
            <button className="sign_btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          {signinerror && <Alert variant="danger">{signinerror} </Alert>}
          <form onSubmit={handleSubmitSignIn}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
              <FcGoogle/>
              </a>
              <a href="#" className="social">
                <FcPhoneAndroid/>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" ref={singnInEmailRef} />
            <input
              type="password"
              placeholder="Password"
              ref={singnInPasswordRef}
            />
            <a href="#" className="forgot_pass">
              Forgot your password?
            </a>
            <button
              className="sign_btn"
              onClick={handleSignInClick}
              disabled={loading}
            >
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
                disabled={loading}
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
