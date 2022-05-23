import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
 

function Header() {
  return (
    <div className={classes.topContainer}>
      <div className={classes.container}>
        <Link to='/'>
          
          <span className='span animate__animated animate__shakeY '>Home</span>
        </Link>
        <Link to='/list'>
        <span>Movies</span>
        </Link>
        <Link to='/contact'>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  )
}

export default Header