import React, { useState } from 'react'
import './Header.css'
import logo from '../Assets/logo.png'

export const Header = () => {

  const[list,setList] = useState("home");
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo} alt="" />
            <p>Foodio</p>
        </div>
        <ul className='header-menu'>
                <li onClick={()=>{setList("home")}} className={list==="home"?"active":""}>Home</li>
                <li onClick={()=>{setList("menu")}} className={list==="menu"?"active":""} >Menu</li>
                <li onClick={()=>{setList("about")}} className={list==="about"?"active":""} >About</li>
                <li onClick={()=>{setList("order")}} className={list==="order"?"active":""} >Order online</li>
                <li onClick={()=>{setList("reservation")}} className={list==="reservation"?"active":""} >Reservation</li>
                <li onClick={()=>{setList("contact")}} className={list==="contact"?"active":""} >Contact us</li>
        </ul>
        <button className='button'>Log in</button>
    </div>
  )
}

export default Header;
