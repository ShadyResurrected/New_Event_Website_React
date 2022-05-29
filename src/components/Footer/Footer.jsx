import React from 'react'

import '../Footer/footer.css'

import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillSlackCircle} from 'react-icons/ai'
import {MdFacebook} from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="social">
                        <li><a href="https://twitter.com/Event_Org_"><AiFillTwitterCircle className='fa'/></a></li>
                        <li><a href="https://www.instagram.com/eventorganiserofficial/?hl=en"><AiFillInstagram className='fa'/></a></li>
                        <li><a href="https://join.slack.com/t/event-organisers/shared_invite/zt-19uy3d6k4-76c3lQai2arKOvoczGDdEA"><AiFillSlackCircle className='fa'/></a></li>
                        <li><a href="https://www.facebook.com/Eventorganizer05-106837022046229"><MdFacebook className='fa'/></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p className="copyright">Copyright &copy; 2022 Event Organizers</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer