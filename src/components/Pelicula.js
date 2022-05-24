import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import './Pelicula.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom'


function Pelicula() {
  const MySwal = withReactContent(Swal)
  
  

  const [moviesList, setMoviesList] = useState([])
  const url='https://api.themoviedb.org/3/discover/movie?api_key=d6a067dbffb83bf22b75cf80963c8030'
  useEffect(() => {
      axios.get(url)
      .then(res=> setMoviesList(res.data.results))
      .catch(err=> MySwal.fire({
        title: <p>hubo un error</p>,
      }))
    }, [])
    
  

  return (
    <div>
      <div className="row justify-content-evenly mt-3">

      {moviesList.map(movie=>(

        <Card style={{ width: '18rem' }} className={`col-3 mt-3 card`} key={movie.id}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='mt-3' />
            <Card.Body className='cardBody'>
                <Card.Title className='card_title'>{movie.title}</Card.Title>
                <Card.Text>
                    {(movie.overview).substring(0,100)}...
                </Card.Text>
                <Link to={`/moviedetails?movieId=${movie.id}`}>
                <Button className="btn_custom">View details</Button>
                
                </Link>
            </Card.Body>
        </Card>
      ))}
      </div>
    </div>
  )
}

export default Pelicula