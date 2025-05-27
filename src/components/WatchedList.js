import React from 'react'
import MovieWatched from './MovieWatched'

const WatchedList = ({watcedMovieList,userRating,setDelMovie}) => {
  return (
    <ul className="list">
      {watcedMovieList.map((movie) => <MovieWatched key={movie.imdbID} movie={movie} userRating={userRating} setDelMovie={setDelMovie} />)}
    </ul>
  )
}

export default WatchedList
