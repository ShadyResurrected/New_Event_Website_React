import React from 'react'

import '../Communities/communities.css'

const Communities = () => {
    return (
        <div className="welcome-area">
            <section className="container Cards">
                <div id="column_1">
                    <div className="card-col-1">
                        <div className="text-col-1">
                            E-Sports
                        </div>
                    </div>
                    <div className="card-col-1">
                        <div className="text-col-1">
                            Coding
                        </div>
                    </div>
                </div>
                <div className="outer-blob">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="inner-blob">Communities</div></div>
                <div id="column_2">
                    <div className="card-col-2"><div className="text-col-2">
                        Sports
                    </div></div>
                    <div className="card-col-2"><div className="text-col-2">
                        Arts
                    </div></div>
                </div>
            </section>
        </div>
    )
}

export default Communities