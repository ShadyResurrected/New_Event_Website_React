import React from 'react'

import { Link } from 'react-router-dom';

import '../Communities/communities.css'

const Communities = () => {
    return (
        <div className="welcome-area">
            <section className="container Cards">
                <div id="column_1">
                    <div className="card-col-1">
                        <Link to="/e_sports">
                            <div className="text-col-1">
                                E-Sports
                            </div>
                        </Link>
                    </div>
                    <div className="card-col-1">
                        <Link to="/coding">
                            <div className="text-col-1">
                                Coding
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="outer-blob">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="inner-blob">Communities</div></div>
                <div id="column_2">
                    <div className="card-col-2">
                        <Link to="/sports">
                            <div className="text-col-2">
                                Sports
                            </div>
                        </Link>
                    </div>
                    <div className="card-col-2">
                        <Link to="/arts">
                            <div className="text-col-2">
                                Arts
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Communities