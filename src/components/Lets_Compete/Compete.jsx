import React from 'react'

import {Link} from 'react-router-dom'

import './compete.css'

const Compete = () => {
    return (
        <section className='welcome-area compete-section'>
            <div className="compete-modal-area">
                <div className="events-schedule-row">
                    <div className="current-event-state circle-state outer circle">
					<div>Current Events : 4</div>
					<span></span>
					<span></span>
					</div>
                    <div className="upcoming-event-state circle-state outer circle">
					<div>Upcoming Events : 5</div>
					<span></span>
					<span></span>
					</div>
                </div>
                <div class="cards_2">
			<div class="card_2 one">
				<div class="details">
					<div class="content">
						<h2>Battle Of Champs</h2>
						{/* <p>This is the description.</p> */}
						<Link to="/checkout" class="button">Register</Link>
					</div>
				</div>
			</div>
			<div class="card_2 two">
				<div class="details">
					<div class="content">
						<h2>Cyber Monday</h2>
						{/* <p>This is the description.</p> */}
						<Link to="/checkout" class="button">Register</Link>
					</div>
				</div>
			</div>
			<div class="card_2 three">
				<div class="details">
					<div class="content">
						<h2>Hip Hop Battle</h2>
						{/* <p>This is the description.</p> */}
						<Link to="/checkout" class="button">Register</Link>
					</div>
				</div>
			</div>
			<div class="card_2 four">
				<div class="details">
					<div class="content">
						<h2>Art Buzzz</h2>
						{/* <p>This is the description.</p> */}
						<Link to="/checkout" class="button">Register</Link>
					</div>
				</div>
			</div>
		</div>
            </div>
        </section>
    )
}

export default Compete