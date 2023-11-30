import React, { useState } from 'react'
import logo from "../Assets/image_data/logo.jpeg"
import cart_icon from "../Assets/image_data/cart1.jpg"
import "../Navbar/NavBar1.css"
import { Link } from 'react-router-dom'
export const NavBar1 = () => {

    const[menu, setmenu]=useState("Home")

  return (
    <div className='navbar1'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>FURNITURE</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setmenu("Home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("chairs")}}><Link style={{textDecoration:'none'}} to='/chairs'>Chairs</Link>{menu==="chairs"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("sofas")}}><Link style={{textDecoration:'none'}} to='/sofas'>Sofas</Link>{menu==="sofas"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("beds")}}><Link style={{textDecoration:'none'}} to='/beds'>Beds</Link>{menu==="beds"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img className='cart' src={cart_icon} alt=''/></Link>
                <div className="nav-cart-count">0</div>
            </div>
    </div>
  )
}
