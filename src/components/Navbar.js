import React from 'react'
import Logo from "./Logo"
import Search from "./Search"
import NumberMovies from "./NumberMovies"


const Navbar = ({query,setQuery,movies,inputEle}) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} inputEle={inputEle} />
      <NumberMovies movies={movies} />
    </nav>
  )
}

export default Navbar
