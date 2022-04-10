import React from 'react'
import '../Events Stats/eventstat.css'

const EventStat = () => {
  return (
    <section className="counter">
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-bottom">
                            <strong>126</strong>
                            <span>Events held</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-top">
                            <strong>63</strong>
                            <span>Participants</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-bottom">
                            <strong>18</strong>
                            <span>Prizes</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item">
                            <strong>27</strong>
                            <span>Communities</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EventStat