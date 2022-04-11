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
                            <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                            <div class="user-image">
                                <img src="\src\assests\images\confusion_logo.png" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">Catherine Soft</h3>
                                <span>Managing Director</span>
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
                            <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                            <div class="user-image">
                                <img src="\src\assests\images\confusion_logo.png" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">Kelvin Wood</h3>
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
                            <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                            <div class="user-image">
                                <img src="\src\assests\images\confusion_logo.png" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">David Martin</h3>
                                <span>Website Manager</span>
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