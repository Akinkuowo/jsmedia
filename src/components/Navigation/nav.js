import React, { useEffect, useState } from 'react'

import "./Nav.css"

const Nav = ()=> {
  const [show, handleShow] = useState(false)

  useEffect(() =>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        handleShow(true)
      }else handleShow(false)
    });
    return () => {
      window.removeEventListener("scroll", handleShow)
    }
  }, [])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img  
            className='nav_logo'
            src='image/logo.png'
            alt='Plcinema Logo'
        
        />

        <img  
            className='nav_avatar'
            src='image/profile_images.png'
            alt='User avatar'
        
        />
    </div>
  )
}

export default Nav