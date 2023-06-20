import React from 'react'
import '../Welcome Background/welcome.css'

import Preloader from '../Preloader/SunspotLoader'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'

import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <div className="welcome-area" id="welcome">
                <div className="header-text container">
                    <Preloader />
                    <Link to="/compete"><button className='start-btn'>Let's Compete <IoChevronForwardCircleOutline className='forward-icon' /></button></Link>
                    <div className="description-summary">
                        <div className="title-desc">Participate. Challenge. Win.</div>
                        <div className="desc-main">This is a platform aimed at facilitating people to participate in events of their interests, with registration processes being as hassle-free as possible.
                            Whilst being involved in this, we also help build communities that unite people with similar interests. The events are fun, competitive, and monetarily rewarding.
                            So pull up your socks, get ready to compete, and be known for your skills.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome