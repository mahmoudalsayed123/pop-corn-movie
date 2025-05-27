import React from 'react'

const Search = ({query,setQuery,inputEle}) => {
  return (
    <input 
      className="search" 
      type="text" 
      placeholder="Search..."  
      value={query}
      ref={inputEle}
      onChange={(e) => {
        setQuery(e.target.value)
      }}
      />
  )
}

export default Search
