import React from 'react'

const Movie = ({movie,selectedMovie}) => {

  // movie = {
  //   poster: Poster,
  //   title: Title,
  //   type: Type,
  //   year: Year,
  //   imdbID: imdbID,
  // } 

  const {
    Poster : poster,
    Title: title,
    Year : year,
    imdbID,
  } = movie;


  return (
    <li className="movie-item" onClick={() => {selectedMovie(imdbID)
    }}>
      <img src={poster} alt="logo" />
      <h3>{title}</h3>
      <div>
        <p>
            <span>📅</span>
            <span>{year}</span>
        </p>
      </div>
    </li>
  )
}

export default Movie
