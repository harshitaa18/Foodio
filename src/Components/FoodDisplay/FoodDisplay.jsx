import React, { useContext, useState } from 'react'
import './FoodDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
import FoodItem from '../FoodItem/FoodItem'
import Buttons from '../Buttons/Buttons'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(ShopContext)
    const [filteredItems, setFilteredItems] = useState(food_list);
      const menuItems=[...new Set(food_list.map((val)=>val.category))]

      const filterItems =(cat)=>{
        if(cat==="All"){
          setFilteredItems(food_list);
        }
        else{
          const newItems = food_list.filter((newval)=>newval.category === cat);
          setFilteredItems(newItems)
        }
      }

      return (
    <div className='food-display' id='food-display'>
        <h2>Our Popular Menu</h2>
        <Buttons menuItems = {menuItems} filterItems={filterItems} />
        <div className="food-display-list">
            {filteredItems.map((item,index)=>{
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default FoodDisplay