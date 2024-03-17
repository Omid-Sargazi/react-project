import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import paly_icon from "../../assets/play-icon.png"
const About = () => {
  return (
    <div className='about'>
    <div className='about-left'>
        <img src={about_img} alt='about' className='about-img' />
        <img src={paly_icon} alt='about' className='play-icon' />
    </div> 
    <div className='about-right'>
        <h3>About University</h3>
        <h2>Lorem ipsum adipisicing elit. Fugiat, magni.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eligendi? Nesciunt vero sint minus omnis, incidunt quisquam debitis velit, sed laboriosam reprehenderit quo sapiente eos voluptas ratione culpa exercitationem placeat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  reprehenderit quo sapiente eos voluptas ratione culpa exercitationem placeat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  ratione culpa exercitationem placeat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eligendi? Nesciunt vero sint minus omnis, incidunt quisquam debitis velit, sed laboriosam reprehenderit quo sapiente eos voluptas ratione culpa exercitationem placeat.</p>
    </div>       
    </div>
  )
}

export default About
