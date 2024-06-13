import React, { useState } from 'react'
import './Homepage.css'
import Poster from '../../Components/Poster/Poster'
import Poster1 from '../../Components/Poster1/Poster1'
import Order from '../../Components/Order/Order'
import Chef from '../../Components/Chef/Chef'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Slider from '../../Components/Slider/Slider'

const Homepage = () => {

  const[category]=useState("All");

  return (
    <div className='homepage'>
      <Poster/>
      <Poster1/>
      <FoodDisplay category={category} />
      <Chef/>
      <Slider/>
      <Order/>
    </div>
  )
}

export default Homepage