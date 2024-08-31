import React from 'react'
import './contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../../src/animation/done.json';
import contactAnimation from '../../../src/animation/contact.json'
const Contact = () => {
  const [state, handleSubmit] = useForm("xoqggdzz");



  return (
    <div className='contacts-me'>
      <div className="contact-right">
      <div data-aos="zoom-in"
      className="title">
     <h1> Contact <span>Me</span></h1>
     </div>
     <div className="contacts">
       <div   data-aos="fade-up"
              data-aos-duration="1000"
        className="contact flex">
       <FaPhoneAlt className='contact-icon'/> 
       <h3>01149114358</h3>
       </div>
       <div    data-aos="fade-up"
              data-aos-duration="1500"
       className="contact flex">
       <MdEmail className='contact-icon'/> 
       <h3>Shroukabdelwhab0@gmail.com</h3>
       </div>
       <div   data-aos="fade-up"
              data-aos-duration="2000" 
       className="contact flex">
       <FaLocationDot className='contact-icon'/> 
       <h3>Egypt , Sharqia , Zagazige</h3>
       </div>
       <div   data-aos="fade-up"
              data-aos-duration="2500"
        className="contact flex">
       <FaGithub className='contact-icon'/> 
       <h3>shroukabd</h3>
       </div>
       <form onSubmit={handleSubmit} className=''>

       <div className="addres ">
        <label htmlFor="email">Email address : </label>
        <input type="email" name='email' placeholder='email address' id='email'/>
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       </div>

       <div className="message flex">
        <label htmlFor="message">Your Massage :</label>
        <textarea name="message" id="message"></textarea>
              <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
       </div>

       <button type="submit" disabled={state.submitting} className='submit'>
        {state.submitting ? "Submiting..." : "Submit"}
       </button>
       

       {state.succeeded && (<h1 className='this-message flex'>
        < Lottie loop={false} style={{height: 44}} animationData={doneAnimation} />
        Your Message has been Send Successfully!</h1>)}
       </form>
       </div>
       </div>

       <div className="contact-left">

     <div className="contact-animation">
      <Lottie style={{height: 355}} animationData={contactAnimation} />
     </div>
     </div>
    </div>
  )
}

export default Contact
