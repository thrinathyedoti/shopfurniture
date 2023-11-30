import React from 'react'
import './Footer.css'
import insta from "../Assets/image_data/Insta.avif"
import pinterest_icon from "../Assets/image_data/pinterest.avif"
import whatsapp from "../Assets/image_data/whatsapp.avif"
import logo from "../Assets/image_data/logo.jpeg"
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt=''/>
            <p>FURNITURE</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footersocial-icon">
            <div className="footers-icons-container">
                <img src={insta} alt=''/>
            </div>
            
            <div className="footersocial-icon">
            <div className="footers-icons-container">
                <img src={pinterest_icon} alt=''/>
            </div>
            
            <div className="footersocial-icon">
            <div className="footers-icons-container">
                <img src={whatsapp} alt=''/>
            </div>
            </div>
        </div>
    </div>
    <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2023 - All Right Reserverd.</p>
    </div>
    </div>
  )
}
