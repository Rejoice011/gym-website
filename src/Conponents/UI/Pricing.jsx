import React from 'react'
import '../../Styles/Pricing.css'
import {RiCheckboxBlankCircleFill} from 'react-icons/ri'


const Pricing = () => {
  return (
    <section id='pricing_plan'>
        <div className="container">
            <div className="pricing_top">
                <h2 className="section_title">Gym <span
                 className="highlight">Pricing</span>Plan</h2>
                    <p>These days, people are more conscious of their health,<br/>
                     and are working out more than ever before.</p>
                         </div>

                         <div className="pricing_wrapper">
                            <div className="pricing_item pricing_item-01" data-aos="fade-up" 
                             data-aos-duration="1500">
                                <div className="pricing_card-top">
                                <h2 className='section_title'>Regular Member</h2>
                                <h2 className="pricing section_title">$50 <span>/month</span></h2>
                            </div>

                            <div className="services">
                                <ul>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Unlimited access to the gym</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Customer support</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Personal trainer</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Standard option</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>5 classes per week</li>
                                    </ul>
                                    <button className='register_btn'>Join Now</button>
                            </div>
                         </div>




                         <div className="pricing_wrapper">
                            <div className="pricing_item pricing_item-02" data-aos="fade-up" 
                                   data-aos-duration="1800">
                                <div className="pricing_card-top">
                                <h2 className='section_title'>Premuim Member</h2>
                                <h2 className="pricing section_title">$70 <span>/month</span></h2>
                            </div>
                            <div className="services">
                                <ul>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Unlimited access to the gym</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Customer support</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Personal trainer</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Standard option</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>5 classes per week</li>
                                    </ul>
                                    <button className='register_btn'>Join Now</button>
                            </div>
                         </div>


                         <div className="pricing_wrapper">
                            <div className="pricing_item pricing_item-03" data-aos="fade-up" 
                                   data-aos-duration="2000">
                                <div className="pricing_card-top">
                                <h2 className='section_title'>Standerd Member</h2>
                                <h2 className="pricing section_title">$100 <span>/month</span></h2>
                            </div>
                            <div className="services">
                                <ul>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Unlimited access to the gym</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Customer support</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Personal trainer</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>Standard option</li>
                                    <li><span><i class="RiCheckboxBlankCircleFill"><RiCheckboxBlankCircleFill/></i>
                                    </span>5 classes per week</li>
                                    </ul>
                                    <button className='register_btn'>Join Now</button>
                            </div>
                            </div>
                    </div>        
               </div>      
            </div>
        </div>
    </section>
  )
}

export default Pricing