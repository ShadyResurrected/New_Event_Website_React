import React from 'react'

import '../Pricing Plans/pricing.css'

const Pricing = () => {
  return (
    <section class="section colored" id="pricing-plans">
        <div class="container">
            {/* <!-- ***** Section Title Start ***** --> */}
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title">Events</h2>
                    </div>
                </div>
                <div class="offset-lg-3 col-lg-6">
                    <div class="center-text">
                        <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Section Title End ***** --> */}

            <div class="row">
                {/* <!-- ***** Pricing Item Start ***** --> */}
                <div class="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                    <div class="glass-effect pricing-item background_pricing">
                        <div class="pricing-header">
                            <h3 class="pricing-title">CYBER MONDAY</h3>
                        </div>
                        <div class="pricing-body">
                            <div class="price-wrapper">
                                <span class="currency">₹</span>
                                <span class="price">50</span>
                                <span class="period">per person</span>
                            </div>
                            <ul class="list">
                                <li class="active">10 Participants</li>
                                <li class="active">Prize Pool</li>
                                <li class="active">Event Type</li>
                                <li class="active">Date to be held</li>
                                <li class="active">1hr duration</li>
                                <li>Refund</li>
                            </ul>
                        </div>
                        <div class="pricing-footer">
                            <a href="#" class="main-button">Register Now</a>
                        </div>
                    </div>
                </div>
                {/* <!-- ***** Pricing Item End ***** --> */}

                {/* <!-- ***** Pricing Item Start ***** --> */}
                <div class="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                    <div class="glass-effect pricing-item active background_pricing1">
                        <div class="pricing-header">
                            <h3 class="pricing-title">BATTLE OF CHAMPS</h3>
                        </div>
                        <div class="pricing-body">
                            <div class="price-wrapper">
                                <span class="currency">₹</span>
                                <span class="price">120</span>
                                <span class="period">per team</span>
                            </div>
                            <ul class="list">
                                <li class="active">10 Participants</li>
                                <li class="active">Prize Pool</li>
                                <li class="active">Event type</li>
                                <li class="active">Date to be held</li>
                                <li class="active">1hr duration</li>
                                <li>Refund</li>
                            </ul>
                        </div>
                        <div class="pricing-footer">
                            <a href="#" class="main-button">Register Now</a>
                        </div>
                    </div>
                </div>
                {/* <!-- ***** Pricing Item End ***** --> */}

                {/* <!-- ***** Pricing Item Start ***** --> */}
                <div class="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div class="glass-effect pricing-item background_pricing2">
                        <div class="pricing-header">
                            <h3 class="pricing-title">HACKATHON</h3>
                        </div>
                        <div class="pricing-body">
                            <div class="price-wrapper">
                                <span class="currency">₹</span>
                                <span class="price">30</span>
                                <span class="period">per person</span>
                            </div>
                            <ul class="list">
                                <li class="active">10 Participants</li>
                                <li class="active">Prize Pool</li>
                                <li class="active">Event type</li>
                                <li class="active">Date to be held</li>
                                <li class="active">1hr duration</li>
                                <li>Refund</li>
                            </ul>
                        </div>
                        <div class="pricing-footer">
                            <a href="#" class="main-button">Register Now</a>
                        </div>
                    </div>
                </div>
                {/* <!-- ***** Pricing Item End ***** --> */}
            </div>
        </div>
    </section>
  )
}

export default Pricing