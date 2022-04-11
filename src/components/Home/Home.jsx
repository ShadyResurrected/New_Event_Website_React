import React from 'react'

import FeatureIt from '../Feature Items/FeatureSmallItem';
import FeatureBigItem from '../Feature Items/FeatureBigItem';
import Parallax from '../Home Parallax/Parallax';
import Testimonial from '../Testimonials/Testimonial';
import Pricing from '../Pricing Plans/Pricing';
import WelcomeHome from '../Welcome Background/WelcomeHome'
import EventStat from '../Events Stats/EventStat';
import Blog from '../Blogs/BLog';
import ContactUs from '../Contact/ContactUs';


const Home = () => {
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
    </div>
  )
}

export default Home