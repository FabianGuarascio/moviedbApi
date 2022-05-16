import React from 'react'
import Header from '../components/Header'
import Pelicula from '../components/Pelicula'
import classes from './Home.module.css'

function Home() {
    return (
        <>
            <div className={`${classes.container}`}>
                <Header/>
                <Pelicula/>
            </div>
        </>
    )
}

export default Home