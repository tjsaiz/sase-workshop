import MovieCard from "./MovieCard";
import React, {useState} from 'react';

// hash the api key :smiley:

function SearchMovies () {

    const [searchInput, setSearchInput] = useState('');

    const [movies, setMovies] = useState([]);
    
    async function searchMovies(e) {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=cb77f8284dc01455ff084869c8c39736&query=${searchInput}`
        const data = await fetch(url);
        const res = await data.json();
        console.log(res);
        setMovies(res.results);
    }

    return (
    <>
        <form className="search-form" onSubmit={searchMovies}>
            <div>Search Movies</div>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value) }className="" type="text" placeholder="i.e. Jurassic Park"></input>
            <button className="button" type="submit">Search Movies</button>
        </form>
        {movies.map(movie => <MovieCard movie={searchInput}/>)};
    </>
    )
}

export default  SearchMovies;