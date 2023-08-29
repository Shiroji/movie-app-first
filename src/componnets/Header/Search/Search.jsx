import React from 'react'
import './Search.css'
import { useSelector } from 'react-redux'

const Search = () => {

  const {searchMovies} = useSelector((state) => state.searchData)

  return (
    <div className='searchBlock'>
      {
        searchMovies.map((el) => {
          return <div key={el.id}>
              <p>{el.title}</p>
          </div>
        })
      }
    </div>
  )
}

export default Search