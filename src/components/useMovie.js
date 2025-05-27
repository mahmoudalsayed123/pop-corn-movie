import { useEffect, useState } from "react";
const key = "3101dbe7";
export function useMovie(query) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState("")


    useEffect(function () {
        const controller = new AbortController();
        async function getData() {
        try{
            setIsLoading(true);
            setError("")
            const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${query}`,{
                signal: controller.signal
            });
    
            if(!res.ok) throw new Error("Missing Found Movies ❌")
    
            const data = await res.json();
            if(data.Response === "False") 
                throw new Error("Missing Found Movies❌❌")
    
            setMovies(data.Search)
            setIsLoading(false);
            } catch(error) {
            setError(error.message);
            } finally {
            setIsLoading(false)
            }
        }
    
        if (query.length < 3){
            setMovies([]);
            setError("");
            return;
        }
        getData();
    
        return function () {
            controller.abort();
        }

        
    }, [query])

    return {movies, error, isLoading}
}