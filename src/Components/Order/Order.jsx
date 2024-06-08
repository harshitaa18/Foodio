import React from 'react'
import './Order.css'

const Order = () => {
  return (
    <div className='order'>
        <h1>Hungry? We are open now..</h1>
        <button className='red'>Order now</button>
        <button className='white'>Reservation</button>
    </div>
  )
}

export default Order