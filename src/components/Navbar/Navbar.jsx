import React from 'react'
import Logo from '../../assests/images/newlogo.png'
import '../Navbar/navbar.css'

const Navbar = () => {
  return (
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        
                        <a href="#" className="newlogo">
                            <img src={Logo} alt="Event Organizers"/>
                        </a>
                        
                        
                        <ul className="nav">
                            <li><a href="#welcome" className="active">Home</a></li>
                            <li><a href="stats.html">Stats</a></li>
                            <li><a href="communities.html">Communities</a></li>
                            <li><a href="#work-process">Recent Winners</a></li>
                            <li><a href="#pricing-plans">Events</a></li>
                            <li><a href="#blog">Updates</a></li>
                            <li><a href="#contact-us">Contact Us</a></li>
                            <li><a href="#"><button className="SignInbtn">Sign-In</button></a></li>
                        </ul>
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>

                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar