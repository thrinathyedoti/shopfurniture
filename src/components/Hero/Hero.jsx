import React from 'react'
import'./hero.css'
import hand_icon from "../Assets/image_data/hand.jpg"
import hero_image from "../Assets/image_data/hero.jpeg"

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>NEW ARRAIVALS</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt=''/>
            </div>
            <p className='collect'>collection</p>
            <p className='every'>for eveyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div><p>Latest Collection</p></div>
            <img src={hero_image} alt=''/>
        </div>
        </div>
        <div className="hero-right">

        </div>
    </div>
  )
}
