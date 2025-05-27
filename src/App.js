import { useEffect, useRef, useState } from 'react';
import './App.css';
import Box from './components/Box';
import MovieList from './components/MovieList';
import Navbar from "./components/Navbar"
import MovieSummary from "./components/MovieSummary"
import MovieDetails from "./components/MovieDetails"
import Error from "./components/Error"
import WatchedList from "./components/WatchedList"
import { useMovie } from './components/useMovie';
import { useLocalStorage } from './components/useLocalStorage';
import { useKeyPress } from './components/useKeyPress';

const key = "3101dbe7";
let isWatched;

function App() {
  
  const [newWatched, setNewWatched] = useState({});
  // const [isWatched, setIsWatched] = useState([])

  const [query, setQuery] = useState('');

  const [idSelected, setIdSelected] = useState("")
  const [movieSelected, setMovieSelected] = useState({});
  const [userRating,setUserRating] = useState(0)

  const inputSearch = useRef(null);

  const {movies, error, isLoading} = useMovie(query);

  const [watch, setWatch] = useLocalStorage([],'watched');


  useEffect(function () {
    async function getMovieDetails() {

      const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${idSelected}`)
      const data = await res.json();
      setMovieSelected(data);
    }
    getMovieDetails();
  }, [idSelected])

  useKeyPress('Enter', function () {
    inputSearch.current.focus();
    function callback(e) {
      if(e.code === "Enter") {
        if(document.activeElement === inputSearch.current) return;
        inputSearch.current.focus();
      }
    }
    document.addEventListener("keydown",callback);

    return function () {
      document.removeEventListener("keydown",callback);
    }
  })

  function handleSelect(id) {
    setIdSelected(selectedId => selectedId === id ? null : id) 
    isWatched = watch.map((movie) => movie.imdbID).includes(id);
  }

  function handleColseMovie() {
    setIdSelected(null)
  }

  function handleUserRating(rating) {
    setUserRating(rating)
  }

  function addWatchMovie(movie) {


    setNewWatched(movie)
    setWatch((watch) => [...watch, movie])


    handleColseMovie();
  }

  function handleDeleteWatchedMovie(id) {
    setWatch((watch) => watch.filter((m) => m.imdbID !== id))
  }

  return (
    <div className="App">
      <Navbar query={query} setQuery={setQuery}  movies={movies} inputEle={inputSearch} />
      <main className='main'>
        <Box>
          {/* {isLoading ? <p className='loader'>Loading...</p> :
            error ? <p>{error}</p> :  <MovieList movies={movies} />
          } */}
          {isLoading && <p className='loader'>Loading...</p>}
          {!isLoading && !error &&  <MovieList selectedMovie={handleSelect} movies={movies} />}
          {error && <Error message={error}/>}
        </Box>

        <Box>
          {/* {isLoading ? <p className='loader'>Loading...</p> :
            <>
              <MovieSummary />
              <MovieDetails idSelected={idSelected} />
            </>
          } */}
          {isLoading && <p className='loader'>Loading...</p>}
          {!isLoading && idSelected && <MovieDetails movieSelected={movieSelected} handleColseMovie={handleColseMovie} handleUserRating={handleUserRating} userRating={userRating} handleWatchMovie={addWatchMovie} isWatchedMovie={isWatched} />}
          {!isLoading && !idSelected && <><MovieSummary watch={watch} /> <WatchedList watcedMovieList={watch} userRating={userRating} setDelMovie={handleDeleteWatchedMovie} /></>}
        </Box>
      </main>
    </div>
  );
}

export default App;
