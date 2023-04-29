import React from 'react'
import '../../Styles/Footer.css'
import logo from '../../assets/dumbell2.png'  


const Footer = () => {
 const year= new Date().getFullYear()

  return (
   <footer className="footer" data-aos="fade-up" 
   data-aos-duration="1500">
    <div className="container">
    <div className='footer-wrappper'>
        <div className="footer_box">
         <div className='logo'>
            <div className="logo-img">
              <img src={logo} alt=''  />
              </div>
            <h2>Fitbody</h2>
             </div> 
                <p>We are so excited to have you visit our gym!You'll be blown away
                    <br/> by how special and unique it is,evrything wii make sence.</p>
            </div>
            <div className="footer_box">
                <h4 className="footer_title">Company</h4>

                <ul className="footer_links">
                    <li><a href="#">Our program</a>
                    </li>
                    <li><a href="#">Our plan</a>
                    </li>
                    <li><a href="#">Become a member</a>
                    </li>
                    
                </ul>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Quik Links</h4>

                <ul className="footer_links">
                    <li><a href="#">About us</a>
                    </li>
                    <li><a href="#">Contact us</a>
                    </li>
                    <li><a href="#">Support</a>
                    </li>
                    
                </ul>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Quik Links</h4>

                <ul className="footer_links">
                    <li><a href="#">About us</a>
                    </li>
                    <li><a href="#">Contact us</a>
                    </li>
                    <li><a href="#">Support</a>
                    </li>
                    
                </ul>
            </div>
        </div>
        <p className='copyrite'>
          copyrite - {year} developed by Rejoice. All rights reserved</p>
    </div>
   </footer>
  )
}

export default Footer