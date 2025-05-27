import React, { useState } from 'react'
import Stars from './Stars'

const StarsRating = ({handleUserRating,userRating,handleWatchMovie,movieSelected}) => {
  let [rating, setRating] = useState(0);
  let [tempRating, setTempRating] = useState(0);


  function handleClick(rating) {
    setRating(rating)
  }


  const starsArr = Array.from({length: 10}, (_,i) => {return i + 1})
  return (
    <>
        <div style={{display: 'flex'}}>
          {starsArr.map((_,i) => 
            <Stars 
              tempRating = {tempRating}
              key={i}
              handleUserRating={handleUserRating}
              onHoverIn={() => {setTempRating(i+1)}}
              onHoverOut={() => setTempRating(0)}
              handleClick={() => handleClick(i +1)}
              full={tempRating ? tempRating >= i+1 : rating >= i+1 }  
              />
          )}
          <p className="num-stars">{tempRating || rating || ""}</p>
      </div>
      {rating > 0 && <button className="btn-add" style={{width: "100%"}} onClick={() => handleWatchMovie(movieSelected)}>+ Add To List</button>}
    </>
  )
}

export default StarsRating
