import React from 'react'

function average(arr) {
  arr.reduce((acc,cur,i,arr) => acc + cur / arr.length,0)
}

const MovieSummary = ({watch}) => {
  
  const avgImdbRating = average(watch.map((movie) => movie.imdbID));
  const avgUserRating = average(watch.map((movie) => movie.imdbRating));
  const avgRunTime = average(watch.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watch?.length} Movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating?.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRunTime} min</span>
        </p>
      </div>
    </div>
  )
}

export default MovieSummary
