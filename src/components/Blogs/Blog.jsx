import React from 'react'

import '../Blogs/blog.css'

import { Link } from 'react-router-dom'

const BLog = () => {
  return (
    <section className="section" id="blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">Information Related to Events</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                        <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="blog-post-thumb">
                        <div className="img img-1">
                           
                        </div>
                        <div className="blog-content">
                            <h3>
                                <Link to="/blog-1">Clutural Event</Link>
                            </h3>
                            <div className="text">
                            A platform for renowned classical dancers in India to showcase India's cultural depth through various dance forms including Odissi......
                            </div>
                            <Link to="/blog-1" className="main-button">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="blog-post-thumb">
                        <div className="img img-2">

                        </div>
                        <div className="blog-content">
                            <h3>
                                <Link to="/blog-2">Arts Events</Link>
                            </h3>
                            <div className="text">
                            “Art is Not What You See, But What You Make Others See!” With this same belief, Fine Arts provide a huge platform to Art Enthusiasts of BIAS, Bhimtal. This independent society is free to join and provides the required .....
                            </div>
                            <Link to="/blog-2" className="main-button">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="blog-post-thumb">
                        <div className="img img-3">
                            
                        </div>
                        <div className="blog-content">
                            <h3>
                                <Link to="/blog-3">Sports Event</Link>
                            </h3>
                            <div className="text">
                            A fun and competitive game ‘Sack Race’ was conducted for BIAS, Bhimtal students. The objective of the activity was to encourage........
                            </div>
                            <Link to="/blog-3" className="main-button">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BLog