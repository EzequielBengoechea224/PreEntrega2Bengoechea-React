import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='nav-container'>
        <ul>
            <Link className='li' to={"/"}>Home</Link>
            <Link className='li' to={"/contact"}>Contact</Link>
            <Link className='li' to={"/about"}>About Us</Link>
            <Link className='li'>Category</Link>
        </ul>
    </nav>
  )
}

export default NavBar