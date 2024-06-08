import React from 'react'
import './Poster1.css'
import menu_2 from '../Assets/menu_2.png'

const Poster1 = () => {
  return (
    <div className='poster1'>
        <div className="poster1-left">
            <img src={menu_2} alt="" />
        </div>
        <div className="poster1-right">
            <h1>Our Most Popular <span>Dish.</span></h1>
            <p>This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.</p>
            <button>Order now</button>
        </div>
    </div>
  )
}

export default Poster1