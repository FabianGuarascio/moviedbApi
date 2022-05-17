import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.topContainer}>
      <div className={classes.container}>
        <Link to='/'>
          <span className='span'>Home</span>
        </Link>
        <Link to='/list'>
        <span>Movies</span>
        
        </Link>
          <span>Contact</span>

      </div>
    </div>
  )
}

export default Header