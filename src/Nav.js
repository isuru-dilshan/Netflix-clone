import React, { useEffect, useState } from 'react';
import './Nav.css';
import navLogo from './images/pngegg.png';
import navAvatar from './images/logo-png.png';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const [show, handleShow] = useState(false);

   const navigate = useNavigate();

   const handleClick = () => {
     navigate('/profile')
    
   }

   const handleClickLogo = () => {
    navigate("/")
   }

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }
    
    useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
      return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

  return (
    <div className={`nav ${ show && 'nav__black'}`}>
        <div className='nav__contents'>

        <img 
        onClick={handleClickLogo}
        className='nav__logo'
        src={navLogo} 
        alt='' />

        <img 
        onClick={handleClick }
        className='nav__avatar'
        src={navAvatar} 
        alt='' />
       </div>
    </div>
  )
}

export default Nav