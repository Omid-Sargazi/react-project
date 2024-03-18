import React from 'react'
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
 const Testimonials = () => {
  return (
    <div className='testimonials'>
      <img src={next_icon} alt='back' className='next-btn'/>
      <img src={back_icon} alt='back' className='back-btn'/>
      <div className='slider'>
        <ul>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt='user'/>
                        <div>
                            <h3>Omid Sargazi</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt possimus explicabo molestiae, minus accusamus aliquid reprehenderit nulla nesciunt earum! Architecto, voluptatem. Accusantium consectetur expedita repellat tempore at amet minus.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt='user'/>
                        <div>
                            <h3>Lrila Sargazi</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt possimus explicabo molestiae, minus accusamus aliquid reprehenderit nulla nesciunt earum! Architecto, voluptatem. Accusantium consectetur expedita repellat tempore at amet minus.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt='user'/>
                        <div>
                            <h3>Feilsa Sargazi</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt possimus explicabo molestiae, minus accusamus aliquid reprehenderit nulla nesciunt earum! Architecto, voluptatem. Accusantium consectetur expedita repellat tempore at amet minus.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt='user'/>
                        <div>
                            <h3>Saeed argazi</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt possimus explicabo molestiae, minus accusamus aliquid reprehenderit nulla nesciunt earum! Architecto, voluptatem. Accusantium consectetur expedita repellat tempore at amet minus.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
