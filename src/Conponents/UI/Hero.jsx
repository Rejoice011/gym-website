import React from 'react'
import '../../Styles/Hero.css'
import {BsFillHeartPulseFill, BsFillPlayFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import img from '../../assets/gym-02.png'
import image from '../../assets/dumbell2.png'


 
const Hero = () => {
  return (
   <section id='home'>
    <div className="container">
        <div className="hero_wrapper">
            <div className="hero_content">
                <h2 className='section_title'
                 data-aos="fade-up" 
                 data-aos-duration="1500">
                    Exercise is the key to a 
                     <span className='highlight'> Healthy</span> Lifestyle
                     </h2>
                <p data-aos="fade-up" 
                   data-aos-delay='100'
                   data-aos-duration="1800">
                    The benefits of living an active lifestyle have to be important to everyone. <br/> 
                     Fitness has to be  encourage  for better lives by getting fit and staying healthy. 
                   </p>
            
              <div className="hero_btns" data-aos="fade-up" 
                   data-aos-delay='200'
                   data-aos-duration="2000">
                <button className='register_btn'>Get Started</button>
                <button className='watch_btn'><span>
                    <i class="BsFillPlayFill"><BsFillPlayFill/></i>
                </span>
                Watch Video
                </button>
              </div>
            </div>

            <div className="hero_img">
                <div className="hero_img-wrapper">

                    <div className="box-01">
                        <div className="box-02">
                            <div className="box-03">
                                <div className="box_img">
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                    </div>
                  <div className="heart_rate"  data-aos="fade-right" 
                 data-aos-duration="1500">
                    <h5>Heart Rate</h5>
                    <span><i class="BsFillHeartPulseFill"><BsFillHeartPulseFill/>
                    </i></span>
                    <h6>2567 BPM</h6>
                  </div>

                    <div className="gyn_location"  data-aos="fade-left" 
                 data-aos-duration="1500">
                        <span><i class="MdLocationOn"><MdLocationOn/></i></span>
                        <h5>Find a new <br/> gym near you</h5>
                    </div>

                    <div className="dumble_icon"  data-aos="fade-down" 
                 data-aos-duration="1500">
                        <img src={image} alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Hero

