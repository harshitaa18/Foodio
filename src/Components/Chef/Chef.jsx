import React from 'react'
import './Chef.css'
import chef1 from '../Assets/chef1.png'
import chef2 from '../Assets/chef2.png'

const Chef = () => {
  return (
    <div className='chef'>
        <h1>Our Popular Chef</h1>
        <div className="chef_pic">
            <div className="chef1">
                <img src={chef1} alt="" />
                <h2>Head Chef (Male)</h2>
            </div>
            <div className="chef2">
                <img src={chef2} alt="" />
                <h2>Head Chef (Female)</h2>
            </div>
        </div>
        <button>View All</button>
    </div>
  )
}

export default Chef