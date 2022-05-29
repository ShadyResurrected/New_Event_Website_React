import React from 'react'

import '../Home Parallax/parallax.css'

const Parallax = () => {
    return (
        <section class="mini" id="work-process">
            <div class="mini-content">
                <div class="container">
                    <div class="row">
                        <div class="offset-lg-3 col-lg-6">
                            <div class="info">
                                <h1>Recent Winners</h1>
                                <p>Winners deserve some recognition, right?
                                    Well here are some top performers.</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- ***** Mini Box Start ***** --> */}
                    <div class="row">
                        <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="mini-box">
                                <i class="confusion_img"><img src="\src\assests\images\confusion_logo.png" alt="" /></i>
                                <strong>Rishab Tripathi</strong>
                                <span>Congratulations on securing a decent position</span>
                            </a>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="mini-box">
                                <i class="confusion_img"><img src="\src\assests\images\confusion_logo.png" alt="" /></i>
                                <strong>Nishant Joshi</strong>
                                <span>Congratulations on securing a decent position</span>
                            </a>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="mini-box">
                                <i class="confusion_img"><img src="\src\assests\images\confusion_logo.png" alt="" /></i>
                                <strong>Gaurav Singh</strong>
                                <span>Congratulations on securing a decent position</span>
                            </a>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="mini-box">
                                <i class="confusion_img"><img src="\src\assests\images\confusion_logo.png" alt="" /></i>
                                <strong>Diksha Joshi</strong>
                                <span>Congratulations on securing a decent position</span>
                            </a>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="mini-box">
                                <i class="confusion_img"><img src="\src\assests\images\confusion_logo.png" alt="" /></i>
                                <strong>Kartik Pandey</strong>
                                <span>Congratulations on securing a decent position</span>
                            </a>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="mini-box">
                                <i class="confusion_img"><img src="\src\assests\images\confusion_logo.png" alt="" /></i>
                                <strong>Smriti Verma</strong>
                                <span>Congratulations on securing a decent position</span>
                            </a>
                        </div>
                    </div>
                    {/* <!-- ***** Mini Box End ***** --> */}
                </div>
            </div>
        </section>
    )
}

export default Parallax