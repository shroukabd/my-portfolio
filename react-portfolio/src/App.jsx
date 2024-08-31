import { FaHandSparkles } from "react-icons/fa";


import React, { useEffect, useState } from 'react'
import Header from './components/1-Header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-Main/Main'
import Contact from './components/4-Contact/Contact'
import Footer from './components/5-Footer/Footer'


const App = () =>{

  return (
    <div id="up"className='container'>
      <Header/>
     
      <Hero/>
      <div className='divider' />
      <Main/>
      <div className='divider' />
      <Contact/>
      <div className='divider' />
      <Footer/>
         

        
                <a href="#up">
                <FaHandSparkles className="scroll-t0-top"/>
                </a>
       
     
    </div>
  )
}

export default App


