import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import './Carrousel.css'


function Carrousel() {

    const [moviesList, setMoviesList] = useState([])
  const url='https://api.themoviedb.org/3/discover/movie?api_key=d6a067dbffb83bf22b75cf80963c8030'
  useEffect(() => {
      axios.get(url)
      .then(res=> setMoviesList(res.data.results))
    .catch(err=>{
        console.log(err)
    })
    }, [])
  return (
    <>
    {moviesList.length && 
        <Carousel fade controls={false} indicators={false} interval={2000}>
            <Carousel.Item className='item'>
                <img
                    className="d-block image"
                    src={`https://image.tmdb.org/t/p/original${moviesList[0].backdrop_path}`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='carousel_title'>{moviesList[0].title}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                className="d-block image"
                src={`https://image.tmdb.org/t/p/original${moviesList[1].backdrop_path}`}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 className='carousel_title'>{moviesList[1].title}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                className="d-block image"
                src={`https://image.tmdb.org/t/p/original${moviesList[2].backdrop_path}`}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className='carousel_title'>{moviesList[2].title}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                className="d-block image"
                src={`https://image.tmdb.org/t/p/original${moviesList[3].backdrop_path}`}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className='carousel_title'>{moviesList[3].title}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>}
    </>
  )
}

export default Carrousel