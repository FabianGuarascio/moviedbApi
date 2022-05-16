import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import './Pelicula.css'

function Pelicula() {

  const [moviesList, setMoviesList] = useState([])

  const url='https://api.themoviedb.org/3/discover/movie?api_key=d6a067dbffb83bf22b75cf80963c8030'
  useEffect(() => {
      axios.get(url)
      .then(res=> setMoviesList(res.data.results))
  }, [])
  console.log(moviesList)


  return (
    <div>
      <div className="row justify-content-evenly mt-3">

      {moviesList.map(movie=>(

        <Card style={{ width: '18rem' }} className={`col-3 mt-3 card`}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='mt-3' />
            <Card.Body className='cardBody'>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {(movie.overview).substring(0,100)}...
                </Card.Text>
                <Button variant="primary" className="btn_custom">Go somewhere</Button>
            </Card.Body>
        </Card>
      ))}
      </div>
    </div>
  )
}

export default Pelicula