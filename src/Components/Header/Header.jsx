import React from 'react'
import "./Header.css";
import logo from "../../assets/logo.png"
const Header = ({children}) => {
  return (
    <div className='Header'>
        <h1>Oslo Beer And Food</h1>
        <img src={logo} alt="Logo empresa" width={"150px"} />
        <p>
            {children}
        </p>
    </div>  
  )
}

export default Header