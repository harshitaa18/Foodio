import React from 'react'
import './FoodItem.css'
import rating_starts from '../Assets/rating_starts.png'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <div className="value">
              <p className="food-item-price">${price}</p>
              <button>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default FoodItem