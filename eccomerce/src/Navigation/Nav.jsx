import {FiHeart} from 'react-icons/fi'


import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
    <nav>
        <div className='nav-container'>
        <input type='text' 
        className='' 
        placeholder='Enter your Search shoes.'
        />

        </div>

       <div className='profile-container' >
        <a href='#'>
        <FiHeart className='nav-icons' />
        </a>

        <a href="#">
            
        </a>

        <a href="#">
         
        </a>


       </div>


    </nav>
  )
}

export default Nav
