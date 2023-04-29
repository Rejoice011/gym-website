// import React from 'react'
import React, { useRef, useEffect} from 'react'
import '../../Styles/Header.css'
import logo from '../../assets/dumbell2.png' 
// import { Link } from 'react-router-dom'
import {FaTimes, FaBars} from 'react-icons/fa'

const nav_links =[
  {
    path:'#home',
    display:'Home'
  },
  {
    path:'#schedule',
    display:'Schedule'
  },
  {
    path:'#classes',
    display:'Classes'
  },
  {
    path:'#pricing_plan',
    display:'Pricing'
  },
]

const Header = () => {
    const headerRef = useRef (null);
    const menuRef = useRef(null)

const headerFunc = () =>{  
      if(
        document.body.scrollTop> 80 ||
        document.documentElement.scrollTop> 80
         ){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }

    }

     useEffect(()=>{

      window.addEventListener('scroll',headerFunc);

      return() =>  window.addEventListener('scroll',headerFunc);
      
     },[]);

     const handleClick = e=> {
      e.preventDefault()

      const targetAttr= e.target.getAttribute('href')
      const location = document.querySelector(targetAttr).offsetTop;

      window.scrollTo({
        left: 0,
        top:location- 80,
      })
     }

   
     const toggleMenu=()=> menuRef.current.classList.toggle
     ("menu-active")
     


  

  return( 
  <header className='header' ref={headerRef}>
    <div className='container'>
       <div className='nav-wrappper'>
         <div className='logo'>
            <div className="logo-img">
              <img src={logo} alt=''  />
              </div>
            <h2>Fitbody</h2>
             </div> 

            

             <div className='navigation' ref={menuRef} onClick={toggleMenu} >
               <ul className= 'manu'>
                
                   {nav_links.map(item=>(
                    <li className="nav_item" >
                      <a  href={item.path}>
                      {item.display}</a>
                      </li>
                  ))}
                   </ul>
             </div>
                

             <div className="nav_right">
             <button className='register_btn  register'  >Register</button> 
                <span className="mobile_menu" onClick={toggleMenu}>   
                <i class="FaTimes"><FaTimes/></i>
                <i class="FaBars "><FaBars /></i>
                
                {/* <div className='mobile_menu' onClick={handleClick}>       
          {click?(
                <FaTimes size={20} />     onClick={togglemenu}
                
          ):(         
             <FaBars size={20} />       
                  )} */}
             {/* </div> */}
                </span>
             </div>
            
       </div>
       
    </div>
  </header>
  )
}

export default Header



// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {FaBars, FaTimes} from 'react-icons/fa'
// import logo from '../asset/logo.png'

// const Navbar = () => {
//     const[click,setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     const[color,setColor] = useState(false)
//     const changeColor = () =>{
//       if (window.scrollY >=1){
//         setColor(true)
//       }else{
//         setColor(false)
//       }
//     }
//     window.addEventListener('scroll',changeColor)
//   return (
//     <div className={color?'header header-bg' :'header'}>
//         <Link to='/'>
//           <img  src={logo} alt='shoe' width='70%'></img>
             
//         </Link>
//         <ul className={ click ? 'nav-manu active': 'nav-manu'}>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/product'>Product</Link>
//           </li>
//           <li>
//             <Link to='/about'>About Us</Link>
//           </li>
//           <li>
//             <Link to='/contact'>Contact</Link>
//           </li>
//           <li>
//             <Link to='/booking'>Booking</Link>
//           </li>  

//         </ul>
//          <div className='hamburger' onClick={handleClick}>
//           {click?(

          
//           <FaTimes size={20} style={{color: "#fff"}}/>
//           ):(
//           <FaBars size={20} style={{color: "#fff"}}/>
//            )}