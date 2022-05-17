import React from 'react'
import Carrousel from '../components/Carrousel'
import Header from '../components/Header'
import classes from './Home.module.css'

function Home() {
    return (
        <>
            <div className={`${classes.container}`}>
                <Header/>
                <div>
              
                </div>
                <Carrousel/>
            </div>
        </>
    )
}

export default Home