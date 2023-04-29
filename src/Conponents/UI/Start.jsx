import React from 'react'
import '../../Styles/Start.css'
import traner from '../../assets/trainer.png'



const Start = () => {
  return (
    <section id='classes'>
        <div className="container">
            <div className="start_wrepper">
                <div className="start_img">
                    <img src={traner} alt="" data-aos="fade-right" 
                 data-aos-duration="1500" />
                </div>

                <div className="start_content" data-aos="fade-left" 
                 data-aos-duration="1500">
                    <h2 className="section_title">

                        Ready to make a <span className="highlight">change?</span>
                    </h2>
                    <p>I fell off the fitness wagon after reaching my goals. Here's how I'm getting back on track.
                      When life gets in the way, use these strategies to get back on top of your game.</p>
                      <button className='register_btn'>Get Started</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start
