import React from 'react'
import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.topContainer}>
      <div className={classes.container}>
        <span>Home</span><span>todas las pelis</span><span>contacto</span>
      </div>
    </div>
  )
}

export default Header