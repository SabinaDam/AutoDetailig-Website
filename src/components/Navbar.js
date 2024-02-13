
import "./NavbarStyles.css";
import React, { useState } from 'react'
import { Link } from "react-router-dom";


import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color,setColor] = useState(false);
    const changeColor =() => {
      if(window.scrollY >=100){
        setColor(true);
      }else{
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor)

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img className="logo" src="/logowhite.png" alt="logo"></img>
        
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">Hjem</Link>
        </li><li>
            <Link to="/omos">Om os</Link>
        </li>
        <li>
            <Link to="/bilpleje">Bilpleje</Link>
        </li>
        <li>
            <Link to="/service">Service</Link>
        </li>
        <li>
            <Link to="/feedback">Feedback</Link>
        </li>
        <li>
            <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"#fff"}} />) : (<FaBars size={20} style={{color:"#fff"}} />)}
        
      </div>
    </div>
  )
}

export default Navbar
