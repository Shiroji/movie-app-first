import React from 'react'
import './GenresBTN.css'

const GenresBTN = ({genre}) => {
  return (
    <button>{genre.name}</button>
  )
}

export default GenresBTN