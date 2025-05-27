import React from 'react'

const NumberMovies = ({movies}) => {
  return (
    <p className="num-results">
      Found <strong> {movies.length} Movies</strong> results
    </p>
  )
}

export default NumberMovies
