import React, { useContext } from 'react'
import './style.css'

import img from '../../assests/images/default_user.png'
import { UserContext } from '../../Context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)

  return (
    <div className='profile__container'>
        <img src={user?.profilePic ? user.profilePic : img} alt="" />
    </div>
  )
}

export default Profile