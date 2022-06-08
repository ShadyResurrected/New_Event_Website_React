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
                                        <i class="classlogo"><img src="..\src\assests\images\logo1.png" alt="" /></i>
                                    </div>
                                    <h5 class="features-title">Stats</h5>
                                    <p>Analytics at your fingertips! See how you have been performing over the entire course of your presence on the platform.

                                        In addition to being able to view your own performance report, you can also see your standing among others from all around the world</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                <div class="glass-effect features-small-item">
                                    <div class="icon">
                                        <i class="classlogo"><img src="..\src\assests\images\logo2.png" alt="" /></i>
                                    </div>
                                    <h5 class="features-title">Earn Prizes</h5>
                                    <p>Winners will get monetary rewards: Who does not like winning some extra cash doing things they anyway love to do? Here at our platform, not only your creativity and skill are unleashed, but, you get rewarded as well.</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                <div class="glass-effect features-small-item">
                                    <div class="icon">
                                        <i class="classlogo"><img src="..\src\assests\images\logo3.png" alt="" /></i>
                                    </div>
                                    <h5 class="features-title">Fun Events</h5>
                                    <p>Everything this platform hosts is so fun to be part of, that you will lose track of time. You can dance, play football, compete in chess games, or be part of any community you like. 
                                    People of all ages can compete in esports for fun, to sharpen their skills, and even to make some extra money.</p>
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