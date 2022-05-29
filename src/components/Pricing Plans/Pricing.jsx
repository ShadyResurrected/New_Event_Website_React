import React from 'react'

import { Link } from 'react-router-dom'

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
                            <p>Following are some of our very popular events. Come, compete
                                with the finest contestants.</p>
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
                                    <li class="active">56 Participants</li>
                                    <li class="active">Prize Pool - ₹5000</li>
                                    <li class="active">Event type - Coding</li>
                                    <li class="active">Date to be held - 30 May 2022</li>
                                    <li class="active">1hr duration</li>
                                    <li>Refund</li>
                                </ul>
                            </div>
                            <div class="pricing-footer">
                                <Link to="/checkout" class="main-button">Register Now</Link>
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
                                    <span class="price">50</span>
                                    <span class="period">per team</span>
                                </div>
                                <ul class="list">
                                    <li class="active">80 Participants</li>
                                    <li class="active">Prize Pool - ₹9000</li>
                                    <li class="active">Event type - ESports</li>
                                    <li class="active">Date to be held - 12 June 2022</li>
                                    <li class="active">4hr duration</li>
                                    <li>Refund</li>
                                </ul>
                            </div>
                            <div class="pricing-footer">
                            <Link to="/checkout" class="main-button">Register Now</Link>
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
                                    <span class="price">50</span>
                                    <span class="period">per person</span>
                                </div>
                                <ul class="list">
                                    <li class="active">17 Participants</li>
                                    <li class="active">Prize Pool - ₹7000</li>
                                    <li class="active">Event type - Coding</li>
                                    <li class="active">Date to be held - 04 April 2022</li>
                                    <li class="active">2hr duration</li>
                                    <li>Refund</li>
                                </ul>
                            </div>
                            <div class="pricing-footer">
                            <Link to="/checkout" class="main-button">Register Now</Link>
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