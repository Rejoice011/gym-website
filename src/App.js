import { useEffect } from 'react'
import Aos from 'aos'

import React from 'react'
import './App.css'
import Header from './Conponents/Header/Header'
// import { Routes, Route } from 'react-router-dom'
import Hero from './Conponents/UI/Hero'
import Exercises from './Conponents/UI/Exercises'
import Start from './Conponents/UI/Start'
import Pricing from './Conponents/UI/Pricing'
import Teastimonials from './Conponents/UI/Teastimonials'
import Footer from './Conponents/UI/Footer'


const App = () => {

 useEffect(()=>{
  Aos.init();
 },[]) 
 
   return(
    <>
    {/* <Routes>

      <Route path='/' element={<Header/>}/>
      <Route path='/hero' element={<Hero/>}/>   
    </Routes> */}
    
    <Header/>
    <Hero/>
    <Exercises/>
    <Start/>
    <Pricing/>
    <Teastimonials/>
    <Footer/>


    
    </>

   ) 
}

export default App

// import './App.css';
// import Home from './Route/Home';
// import Product from './Route/Product'; 
// import About from './Route/About';
// import Contact from './Route/Contact';
// import Booking from './Route/Booking';
// import {Routes,Route} from 'react-router-dom'


// function App() {
//   return (
    
//      <>
//       <Routes>
//        <Route path='/' element={<Home />} />
//        <Route path='/product' element={<Product />} />
//        <Route path='/about' element={<About />} />
//        <Route path='/contact' element={<Contact />} />
//        <Route path='/booking' element={<Booking />} />
//       </Routes>
//      </>
    
//   );
// }

// export default App;
