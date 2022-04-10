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
                        <li><a href="#"><AiFillTwitterCircle className='fa'/></a></li>
                        <li><a href="#"><AiFillInstagram className='fa'/></a></li>
                        <li><a href="#"><AiFillSlackCircle className='fa'/></a></li>
                        <li><a href="#"><MdFacebook className='fa'/></a></li>
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