import React from 'react'
import './hero.css'
import { MdVerified } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import imgMe from '../../../public/me-modified.png'
import Lottie from "lottie-react";
import developerAnimation from '../../../src/animation/developer.json'
import { GiDuration } from 'react-icons/gi';
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className='hero flex'>
      <div className="left-section">
         <div className="avatar">
          <motion.img
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1}}
     

          src={imgMe}></motion.img>
          <MdVerified className='icon-fied'/>
         </div>
         <motion.h1
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             transition={{duration: 2}}>
      
          
          Frontend Developer</motion.h1>
         <p     data-aos="fade-up"
              data-aos-duration="1000">
          I'm Shrouk Mohamed, a Web Developer, 
          a business woman at freelancer, residing in the city of zagazige
          i have A lot Experience and this progict Created by me
         </p>
         <div  
          className="icons-social">
          <div     data-aos="fade-up"
              data-aos-duration="1500">
             <a href="https://www.facebook.com/shrouk.abdelwhab?mibextid=ZbWKwL"></a>
             <  FaFacebook className='icon-social' /></div>
             <div     data-aos="fade-up"
                     data-aos-duration="2000">
             <FaInstagram className='icon-social'/></div>
             <div   data-aos="fade-up"
                     data-aos-duration="2500">
             <FaGithub className='icon-social'/></div>
             <div   data-aos="fade-up"
                     data-aos-duration="3000">
             <a href="https://www.linkedin.com/in/shrouk-mohamed-97a22a2ba?utm_source=share&utm_
             campaign=share_via&utm_content=profile&utm_medium=android_app"></a>
             <FaLinkedinIn className='icon-social'/></div>
         </div>
         < button className="Dawnload-cv">Dawnload CV</button>
       </div>
      <div className="right-section animation">
      <Lottie animationData={developerAnimation} />
      </div>
    </section>
  )
}

export default Hero
