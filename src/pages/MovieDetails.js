import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import classes from "./MovieDetails.module.css";

function MovieDetails() {
let query = new URLSearchParams(window.location.search)
let movieId= query.get('movieId');
const url=`https://api.themoviedb.org/3/movie/${movieId}?api_key=d6a067dbffb83bf22b75cf80963c8030`
const [movieDetail, setMovieDetail] = useState([])

useEffect(() => {
  axios.get(url)
  .then(res=> setMovieDetail(res.data))

 
}, [url])
let stars=""
for (let index = 0; index <movieDetail.vote_average ; index++) {
stars+=  "🌟"
}
  return (
    <>
    <Header/>
        <div className={classes.container}>
            <div className={`${classes.img_container}`}>
              <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt="" />
              <p className='pl-1'><b>Score:</b>{stars}</p>
            </div>
            <div className={classes.details_container}>
                <h2>{movieDetail.title}</h2>
                <p>{movieDetail.overview}</p>
            </div>
        </div>
    </>
  )
}

export default MovieDetails