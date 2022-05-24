import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
 

function Header() {
  return (
    <header className={classes.topContainer}>
      <nav className={classes.container}>
        <Link to='/'>
          
          <span className='span animate__animated animate__shakeY '>Home</span>
        </Link>
        <Link to='/list'>
        <span>Movies</span>
        </Link>
        <Link to='/contact'>
          <span>Contact</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header