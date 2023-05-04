import React, { useContext } from 'react'

import FeatureIt from '../Feature Items/FeatureSmallItem';
import FeatureBigItem from '../Feature Items/FeatureBigItem';
import Parallax from '../Home Parallax/Parallax';
import Testimonial from '../Testimonials/Testimonial';
import Pricing from '../Pricing Plans/Pricing';
import WelcomeHome from '../Welcome Background/WelcomeHome'
import EventStat from '../Events Stats/EventStat';
import Blog from '../Blogs/Blog';
import ContactUs from '../Contact/ContactUs';
import Profile from '../ProfilePic/Profile';
import { UserContext } from '../../Context/UserContext';


const Home = () => {

  const {user} = useContext(UserContext)
  return (
    <div>
        <WelcomeHome />
        <FeatureIt />
        <FeatureBigItem />
        <Parallax />
        <Testimonial />
        <Pricing />
        <EventStat />
        <Blog />
        <ContactUs />
        {user?._id ? <Profile/> : ''}
    </div>
  )
}

export default Home