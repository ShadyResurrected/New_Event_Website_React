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
                               Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.
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
                                <Link to="/blog-2">Arts Event</Link>
                            </h3>
                            <div className="text">
                                Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.
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
                                Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.
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