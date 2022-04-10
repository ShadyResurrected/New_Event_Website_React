import React from 'react'
import '../Welcome Background/welcome.css'

import Preloader from '../Preloader/SunspotLoader'
import {IoChevronForwardCircleOutline} from 'react-icons/io5'

const Welcome = () => {
    return (
        <div>
            <div class="welcome-area" id="welcome">
                <div class="header-text container">
                <Preloader/>
                <button className='start-btn'>Let's Compete <IoChevronForwardCircleOutline className='forward-icon'/></button>
                <div className="description-summary">
                    <div className="title-desc">lorem ipsum</div>
                    <div className="desc-main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque nostrum fugit! Eum molestiae fugiat rem quas perspiciatis eveniet iure id.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos excepturi quaerat error quisquam officiis ad ducimus a sequi, pariatur quidem laboriosam quae dignissimos asperiores labore possimus eum laborum expedita tenetur! Cupiditate, sint.</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome