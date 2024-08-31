import React, { useEffect, useState } from 'react'
import "./header.css"
import { MdMenu } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

import { FaMoon } from "react-icons/fa";
import { FaSun } from 'react-icons/fa';
const Header = () => {
  const [showModel, setShowModel] = useState(false)
  const [theme , setTheme] = useState(localStorage.getItem("currentMode") ?? "dark")
  useEffect(() => {
   if (theme === "light"){
    document.body.classList.remove("dark")
    document.body.classList.add("light")
   } else {
    document.body.classList.remove("light")
    document.body.classList.add("dark")
   }
  }, [theme])
  return (
     <header  className='flex'>
    <MdMenu className='icon-menu'
       onClick={() =>{
        setShowModel(true)
      }}/>
     
       <div/>
      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articels</a></li>
          <li><a href="">Progicta</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
       <div className="icon">
        <button onClick={() =>{
         //send value to local storage
          localStorage.setItem("currentMode" , theme === "dark" ? "light" : "dark")

        //get value frem local storage
        setTheme(localStorage.getItem("currentMode"))

        }} className='mode flex'> 
         {theme === "dark" ? ( <span className='icon-dark'><FaMoon /></span>) : 
         (<span className='icon-light'><FaSun/></span>)}
          
        </button>
        
         </div>
       

   {showModel &&(
          <div className="fixed">
    
          <ul className=' model'>
            <li>
              <FaWindowClose className='icon-close'
               onClick={() => {
                 setShowModel(false)
      
               }}/>
            </li>
            <li><a href="">About</a></li>
            <li><a href="">Articels</a></li>
            <li><a href="">Progicta</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
   )}


    </header>
  )
}

export default Header

