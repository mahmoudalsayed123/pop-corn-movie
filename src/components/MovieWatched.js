import React from 'react'

const MovieWatched = ({movie,userRating,setDelMovie}) => {
  return (
    <li>
        <img src={movie.Poster} alt="Img-Poster" />
        <h3>{movie.Title}</h3>
        <div>
            <p>
                <span>⭐</span>
                <span>{movie.imdbRating}</span>
            </p>
            <p>
                <span>🌟</span>
                <span>{userRating}</span>
            </p>
            <p>
                <span>⏳</span>
                <span>{movie.Runtime}</span>
            </p>
            <button className="btn-delete" onClick={() => setDelMovie(movie.imdbID)}>X</button>
        </div>
    </li>
  )
}

export default MovieWatched
