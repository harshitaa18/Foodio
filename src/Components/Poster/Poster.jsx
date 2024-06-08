import React from 'react'
import './Poster.css'
import poster_pic from '../Assets/poster_pic.png'

const Poster = () => {
  return (
    <div className='poster'>
        <div className="poster-left">
            <h1>Best Restaurant In <span>Town.</span></h1>
            <p>We provide best food in town, we provide home delivery and dine in services.</p>
            <div className="key">
            <button className='batty1'>Order now</button>
            <button className='batty2'>Reservation</button>
            </div>
        </div>
        <div className="poster-right">
            <img src={poster_pic} alt="" />
        </div>
    </div>
  )
}

export default Poster