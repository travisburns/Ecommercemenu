import {FiHeart} from 'react-icons/fi'
import {AiPOutlineShoppingCart, AiOutlineUSerAdd} from 'react-icons/ai'

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

        <a href="">
            <AiPOutlineShoppingCart className="nav-icons" />
        </a>

        <a href="">
            <AiOutUserAdd className="nav-icons" />
        </a>


       </div>


    </nav>
  )
}

export default Nav
