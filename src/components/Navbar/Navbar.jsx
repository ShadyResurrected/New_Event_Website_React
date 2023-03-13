import React from 'react'
import Logo from '../../assests/images/newlogo.png'
import '../Navbar/navbar.css'

import { Link,useNavigate,NavLink } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();

    const navigateToAuth = () => {
        navigate('/login');
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
                                        
                                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                                        <li><NavLink to="/stats" className={({ isActive }) => (isActive ? 'active' : '')}>Stats</NavLink></li>
                                        <li><NavLink to="/communities" className={({ isActive }) => (isActive ? 'active' : '')}>Communities</NavLink></li>
                                        <li><NavLink to="/contest" className={({ isActive }) => (isActive ? 'active' : '')}>Contests</NavLink></li>
                                        {/* <li><a href="https://delightful-donut-a910f2.netlify.app/">Compiler</a></li> */}
                                        <li><a ><button className="SignInbtn" onClick={navigateToAuth}>Sign In</button></a></li>
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