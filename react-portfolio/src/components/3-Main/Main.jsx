import React, { useEffect, useState } from 'react'
import './main.css'
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import img1 from '../../images/ecommerse.png';
import img2 from '../../images/shrouk-store.png';
import img3 from '../../images/bootstrab.png';
import img4 from '../../images/foodera.png';
import img5 from '../../images/real-state.png';
import img6 from '../../images/gym.png';
import img7 from '../../images/resturant.png';
import img10 from '../../images/mobelia.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Main = () => {
  const  [currentActive , setcurrentActive] = useState("next")
  return (
    <main>
      <div className="section-up">
        <div className=" section-left">
          <button data-aos="fade-up"
               data-aos-duration="1500"
           onClick={() => {setcurrentActive ("next")}} className={currentActive === "next" ? "active" : null}>Next.js 14</button>
          <button data-aos="fade-up"
                data-aos-duration="2000"
           onClick={() => {setcurrentActive ("js")}} className={currentActive === "js" ? "active" : null}>React js</button>
          <button data-aos="fade-up"
                  data-aos-duration="2500"
          onClick={() => {setcurrentActive ('java')}} className={currentActive === "java" ? "active" : null }>JavaScript</button>
          <button data-aos="fade-up"
                data-aos-duration="3000"
          onClick={() => {setcurrentActive ("tail")}} className={currentActive === "tail" ? "active" : null}>Tailwined css</button>
          <button data-aos="fade-up"
                 data-aos-duration="3000"
          onClick={() => {setcurrentActive ("boot")}} className={currentActive === "boot" ? "active" : null}>BootStrap</button>
           <button data-aos="fade-up"
               data-aos-duration="3000"
           onClick={() => {setcurrentActive ("css") }} className={currentActive === "css" ? "active" : null}>HTML & CSS</button>


        </div>
      </div>


      <div className="section-down">
        <div className="right-section">

        <article data-aos="fade-right"
         className=' card'>

           <a href="https://mobelia-website-shrouk.netlify.app" target='blank'>
              <img src={img10} alt="" className='img-progict'/></a>
           
            <div style={{ width: "266px"}} className="box">
              <h1 className='title'>Mobelia Website</h1>
              <p className='sub-title'>This is Project I use Next.js14 & Tailwindcss
                !</p>
            </div>

            <div className=" big">
            
          
              
              <div className="more">
                <a href="">More</a>
                <FaArrowRight className='more-icon' />

              </div>
            </div>
          </article>
          <article data-aos="fade-left" 
           className=' card'>
            <a href="https://spectacular-pudding-b2fe1f.netlify.app">
              <img src={img1} alt="" className='img-progict'/>
            </a>
            <div style={{ width: "266px" }} className="box">
              <h1 className='title'>Ecomerse React</h1>
              <p className='sub-title'>This ecommerse I use React.js&Javascript&Api</p>
            </div>

            <div className=" big">
          
          
              
              <div className="more">
                <a href="">More</a>
                <FaArrowRight className='more-icon' />

              </div>
            </div>
          </article>

          <article data-aos="fade-right"
          className=' card'>
            <a href="https://statuesque-puffpuff-3569b8.netlify.app">
              <img src={img2} alt="" className='img-progict'/>
            </a>
            <div style={{ width: "266px" }} className="box">
              <h1 className='title'>Ecomerse react</h1>
              <p className='sub-title'>This ecommerse I use React.js&Javascript&Api!</p>
            </div>
            <div className="flex big">
         
              <div className="more">
                <a href="">More</a>
                <FaArrowRight className='more-icon' />

              </div>
            </div>
          </article>
          <article data-aos="fade-left"
           className=' card'>
            <a href="https://sensational-travesseiro-eae081.netlify.app">
              <img src={img6} alt="" className='img-progict'/>
            </a>
            <div style={{ width: "266px" }} className="box">
              <h1 className='title'>Gym Website</h1>
              <p className='sub-title'>This project i use React.js & Javascript!
                </p>
            </div>

            <div className=" big">
          
          
              
              <div className="more">
                <a href="">More</a>
                <FaArrowRight className='more-icon' />

              </div>
            </div>
          </article>
          <article data-aos="fade-right"
           className=' card'>
            <a href="https://classy-biscochitos-02f729.netlify.app">
              <img src={img7} alt="" className='img-progict'/>
            </a>
            <div style={{ width: "266px" }} className="box">
              <h1 className='title'>Resturant Web</h1>
              <p className='sub-title'>This project i use React.js&Javascript&Tailwindcss
                </p>
            </div>

            <div className=" big">
          
          
              
              <div className="more">
                <a href="">More</a>
                <FaArrowRight className='more-icon' />

              </div>
            </div>
          </article>

          <article data-aos="fade-left"
    
          className=' card'>
            <a href="https://sfary-shrouk.netlify.app">
              <img src={img3} alt="" className='img-progict' />
            </a>
            <div style={{ width: "266px" }} className="box">
              <h1 className='title'>Sfary progict</h1>
          <p>This project build by Bootstrap!</p>
            </div>
            <div className="flex big">
              
        
              <div className="more">
                <a href="">More</a>
                <FaArrowRight className='more-icon' />

              </div>
            </div>
          </article>

        
          <article data-aos="fade-right"
          className=' card'>
            <a href="">
              <img src={img5} alt="" className='img-progict'/>
            </a>
            <div style={{ width: "266px" }} className="box">
              <h1 className='title'>Real State</h1>
          <p>This project i use React.js & Javascript!</p>
            </div>
            <div className="flex big">
         
              <div className="more">
                <a href="">More</a>
                <FaArrowRight className='more-icon' />

              </div>
            </div>
          </article>
          <article className=' card'>
            <a href="">
              <img src={img4} alt="" className='img-progict'/>
            </a>
            <div style={{ width: "266px" }} className="box">
              <h1 className='title'>Foodera Food</h1>
              <p>This project i use React.js & Javascript!</p>
            </div>
            <div className="flex big">
       
              <div className="more">
                <a href="">More</a>
                <FaArrowRight className='more-icon' />

              </div>
            </div>
          </article>
        
        </div>
      </div>
    </main>
  )
}

export default Main
