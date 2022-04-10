import React from 'react'
import Logo from '../../assests/images/newlogo.png'
import '../Navbar/navbar.css'

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { signInWithGoogle } from '../../Backend/Firebase';

const Navbar = () => {

    const [LabelName, setLabelName] = useState("Sign In");

    const WrapperFunction = () => {
        signInWithGoogle();
        if (LabelName === "Sign In") {
            setLabelName("Log Out");
        } else
            LogOut();
    }

    const LogOut = () => {
        localStorage.clear();
        setLabelName("Sign In");
    }
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
                                        
                                        <li><Link to="/" className="active">Home</Link></li>
                                        <li><Link to="/stats">Stats</Link></li>
                                        <li><Link to="/communities">Communities</Link></li>
                                        <li><a href="#work-process">Recent Winners</a></li>
                                        <li><a href="#pricing-plans">Events</a></li>
                                        <li><a href="#blog">Updates</a></li>
                                        <li><a href="#contact-us">Contact Us</a></li>
                                        <li><a ><button className="SignInbtn" onClick={WrapperFunction}>{LabelName}</button></a></li>
                                    </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>

                            <div className='profile-pic'><img className='my-profile-pic' src={localStorage.getItem("Profilepic")} alt=""/></div>

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar