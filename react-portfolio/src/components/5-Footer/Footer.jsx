import React from 'react'
import './footer.css'
import { FaFacebook , FaInstagram , FaLinkedin 
  , FaWhatsapp , FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footers-me '>
      <div  data-aos="fade-up"
              data-aos-duration="1000"
      className="footer">
      <h1>My Skills</h1>
      <h3>HTML</h3>
      <h3>Css</h3>
      <h3>JavaSkript</h3>
      <h3>BootStrap</h3>
      <h3>React Js</h3>
      </div>
      <div  data-aos="fade-up"
              data-aos-duration="1500"
      className="footer">
        <h1>Progicts</h1>
        <h3>screen</h3>
      <h3>labtops</h3>
      <h3>iphon</h3>
      <h3>cars</h3>
      <h3>labs</h3>
      </div>
      <div  data-aos="fade-up"
              data-aos-duration="2000"
      className="footer">
        <h1>Social Media</h1>
        <FaFacebook className='icon-footer'/>
        <FaInstagram className='icon-footer'/>
        <FaLinkedin className='icon-footer'/>
        <FaWhatsapp className='icon-footer'/>
        <FaGithub className='icon-footer'/>
      </div>
      <div  data-aos="fade-up"
              data-aos-duration="2500"
      className="footer">
        <h1>Useful Links</h1>
        <a href="">home</a>
        <a href="">service</a>
        <a href="">about</a>
        <a href="">contact</a>
      </div>
    
    </div>
  )
}

export default Footer
