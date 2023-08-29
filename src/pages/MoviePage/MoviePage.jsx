import React, { useEffect } from 'react'
import './MoviePage.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie } from '../../store/slices/movieDetailedSlice'


const IMG_URL = "https://image.tmdb.org/t/p/w500/";

function MoviePage() {

  const dispatch = useDispatch()
  const { filmPage } = useSelector((state) => state.movieData)
  const { id } = useParams({})


  useEffect(() => {
    dispatch(fetchMovie(id))
  }, [])


  return (
    <div className='moviePage'>
      <div className='imgBlock'>
        {/* <img src={IMG_URL + filmPage?.backdrop_path} alt="" /> */}
      </div>
      <div className='detM'>
        <div className='movieInfoImg'>
          <img src={IMG_URL + filmPage?.poster_path} alt="" />
        </div>
        <div className='movieInfoDesc'>
          <h2>{filmPage?.title}</h2>
          <p>Description : <br /> {filmPage?.overview}</p>
          <b>Release Date : {filmPage?.release_date}</b>
          <p>Rating : {filmPage?.vote_average} / 10</p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default MoviePage