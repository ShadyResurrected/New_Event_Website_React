import React from 'react'

const FeatureBigItem = () => {
    return (

        <>
            {/* ================================================== LEFT ONE ================================================== */}
            <section class="section padding-top-70 padding-bottom-0" id="features">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                            <img src="..\src\assests\images\left-image.png" class="rounded img-fluid d-block mx-auto" alt="App" />
                        </div>
                        <div class="col-lg-1"></div>
                        <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                            <div class="left-heading">
                                <h2 class="section-title">Connect people with similar interests</h2>
                            </div>
                            <div class="left-text">
                                <p>Looking for communities where people share similar interests as you?
                                    Well, your search is over.
                                    Whether it's gaming or athletics or music, we have an event lined up for you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="hr"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================== RIGHT ONE ================================================== */}
            <section class="section padding-bottom-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                            <div class="left-heading">
                                <h2 class="section-title">We can help you sharpen your skills</h2>
                            </div>
                            <div class="left-text">
                                <p>Our communities have people with varying levels of skills.
                                    So whether you're a novice or a grandmaster you can always sharpen your skills.</p>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                        <div class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                            <img src="..\src\assests\images\right-image.png" class="rounded img-fluid d-block mx-auto" alt="App" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureBigItem