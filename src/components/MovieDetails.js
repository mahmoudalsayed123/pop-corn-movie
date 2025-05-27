import React, { useEffect } from 'react'
import StarsRating from './StarsRating'
import { useKeyPress } from './useKeyPress'

const MovieDetails = ({movieSelected,handleColseMovie,handleUserRating,userRating,handleWatchMovie,isWatchedMovie}) => {

  useKeyPress("Escape",handleColseMovie);

  useEffect(function () {
    if(!movieSelected.Title) return;
    document.title = `Movie | ${movieSelected.Title}`;

    return function () {
      document.title = `UsePopcorn`;
    }
  },[movieSelected])

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={handleColseMovie}>←</button>
        <img src={movieSelected.Poster} alt="movieImg" />
        <div className="details-overview">
          <h2>{movieSelected.Title}</h2>
          <p>{movieSelected.Released}  • {movieSelected.Runtime}</p>
          <p>{movieSelected.Genre}</p>
          <p>
            <span>⭐️</span>
            {movieSelected.imdbRating} IMDb rating
          </p>
        </div>
      </header>
      <section>
        <div className='rating'>
          <div style={{display: "flex", alignItems: "center", gap: "16px", flexDirection: "column"}}>
            {isWatchedMovie ? <p>You Already Add This Movie And Rating As {userRating} ⭐</p> :  <StarsRating handleUserRating={handleUserRating} userRating={userRating} handleWatchMovie={handleWatchMovie} movieSelected={movieSelected}/>}
            {/* <StarsRating handleUserRating={handleUserRating} userRating={userRating} handleWatchMovie={handleWatchMovie} movieSelected={movieSelected}/> */}
          </div>
        </div>
        <p>{movieSelected.Plot}</p>
        <p>Starring By {movieSelected.Actors}</p>
        <p>Director By{movieSelected.Plot}</p>
      </section>
    </div>
  )
}

export default MovieDetails