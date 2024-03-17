import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
          <h1>We Ensure better education for a better world</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore mollitia repellendus facere ipsam aperiam amet dicta fuga ad? Deleniti veritatis alias facilis earum odit incidunt ipsum odio nostrum recusandae aliquid.  </p>
          <button className='btn'>Explore More <img src={dark_arrow} alt='arrow'/> </button>
        </div>
    </div>
  )
}

export default Hero
