import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movies from '../../componnets/Movies/Movies'
import { changePage } from '../../store/slices/movieSlice'
import './HomePage.css'

const HomePage = () => {
  const { movies, isLoading } = useSelector((state) => state.moviesData)
  const dispatch = useDispatch()


  return (
    <div>
      <div className='mcss'>
        {
          movies.map((m) => {
            return <Movies key={m.id} movie={m} />
          })
        }
      </div>
        <button disabled={isLoading} onClick={() => dispatch(changePage())} className='moreBtn'>{isLoading ? 'Loading...' : 'more'}</button>
    </div>
  )
}

export default HomePage