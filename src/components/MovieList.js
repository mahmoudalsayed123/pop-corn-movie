import React from 'react'
import Movie from './Movie'

const MovieList = ({movies,selectedMovie}) => {
  return (
    <ul className="list list-movies">
      {movies.map(movie => <Movie selectedMovie={selectedMovie} key={movie.imdbID}  movie={movie}/>)}
    </ul>
  )
}

export default MovieList
