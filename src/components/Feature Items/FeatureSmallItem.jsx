import React from 'react'

import '../Feature Items/featureSmall.css'

const FeatureIt = () => {
  return (
    <section class="section home-feature">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div class="glass-effect features-small-item">
                                <div class="icon">
                                    <i class="classlogo"><img src="\src\assests\images\logo1.png" alt=""/></i>
                                </div>
                                <h5 class="features-title">Stats</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, culpa?</p>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div class="glass-effect features-small-item">
                                <div class="icon">
                                    <i class="classlogo"><img src="\src\assests\images\logo2.png" alt=""/></i>
                                </div>
                                <h5 class="features-title">Earn Prizes</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, autem.</p>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div class="glass-effect features-small-item">
                                <div class="icon">
                                    <i class="classlogo"><img src="\src\assests\images\logo3.png" alt=""/></i>
                                </div>
                                <h5 class="features-title">Fun Events</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, sunt?</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureIt