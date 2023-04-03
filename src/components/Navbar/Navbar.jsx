import React, { useEffect } from "react";
import Logo from "../../assests/images/newlogo.png";
import "../Navbar/navbar.css";

import { Link, useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();

  const { isAuthorized } = useAuth();

  const handleClickAuth = async (e) => {
    e.preventDefault();
    if (!isAuthorized) return navigate("/login");

    try {
      const { data } = await axios.get("http://localhost:8000/users/logout", {
        withCredentials: true,
      });
      if (data.success) {
        toast.loading("Logging Out...");
        setTimeout(() => {
          window.location.reload(false);
          isAuthorized(false);
        }, 1000);
      } else {
        toast.error("Some error occurred");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="newlogo">
                <img src={Logo} alt="Event Organizers" />
              </Link>
              <ul className="nav">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/stats"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Stats
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/communities"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Communities
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contest"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Contests
                  </NavLink>
                </li>
                {/* <li><a href="https://delightful-donut-a910f2.netlify.app/">Compiler</a></li> */}
                <li>
                  <a>
                    <button className="SignInbtn" onClick={handleClickAuth}>
                      {!isAuthorized ? "Sign In" : "Log Out"}
                    </button>
                  </a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
