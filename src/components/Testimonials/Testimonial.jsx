import React from 'react'

import '../Testimonials/testimonial.css'

const Testimonial = () => {
  return (
    <section class="section" id="testimonials">
        <div class="container">
            {/* <!-- ***** Section Title Start ***** --> */}
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title">What do they say?</h2>
                    </div>
                </div>
                <div class="offset-lg-3 col-lg-6">
                    <div class="center-text">
                        <p>We are sure you like what you're seeing, but why trust us? Go through what others have to say. </p>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Section Title End ***** --> */}

            <div class="row">
                {/* <!-- ***** Testimonials Item Start ***** --> */}
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="team-item">
                        <div class="team-content">
                            <i><img src="\src\assests\images\testimonial-icon.png" alt=""/></i>
                            <p>They ensure every body is entertained and nobody is bored. Always enjoy being part of their events.</p>
                            <div class="user-image">
                                <img src="\src\assests\images\confusion_logo.png" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">Monica Rawat</h3>
                                <span>Professional dancer</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ***** Testimonials Item End ***** --> */}
                
                {/* <!-- ***** Testimonials Item Start ***** --> */}
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="team-item">
                        <div class="team-content">
                            <i><img src="\src\assests\images\testimonial-icon.png" alt=""/></i>
                            <p>With this platform I have been able to explore many interests and have made friends in various communities, just in a span of 6 months. I wish I knew it existed before.</p>
                            <div class="user-image">
                                <img src="\src\assests\images\confusion_logo.png" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">Irfan Khan</h3>
                                <span>Digital Marketer</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ***** Testimonials Item End ***** --> */}
                
                {/* <!-- ***** Testimonials Item Start ***** --> */}
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="team-item">
                        <div class="team-content">
                            <i><img src="\src\assests\images\testimonial-icon.png" alt=""/></i>
                            <p>I have enjoyed being part of various communities here.
Not only do they do the conventional stuff like football, esports, and chess, but also let you explore things like paragliding. </p>
                            <div class="user-image">
                                <img src="\src\assests\images\confusion_logo.png" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">Ishan Kapoor</h3>
                                <span>University Student</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ***** Testimonials Item End ***** --> */}
            </div>
        </div>
    </section>
  )
}

export default Testimonial