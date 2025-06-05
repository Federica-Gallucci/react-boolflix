import { useState, useEffect } from "react";
import axios from "axios";
import { useMovies } from "../../contexts/MoviesContext";

export default function SearchBar() {
  // const [query, setQuery] = useState("");
  const { movies, fetchMovies, setQuery, query } = useMovies();

  const handleMoviesSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
    // axios
    //   .get(`${apiUri}/search/movie?api_key=${apiKey}&query=${query}`)
    //   .then((res) => {
    //     const response = res.data.results;
    //     console.log(response);
    //     setMovies(response);
    //   });
  };

  const handleMoviesChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <form onSubmit={handleMoviesSubmit}>
      <input
        type="text"
        name="query"
        value={query}
        placeholder="Cerca un film ..."
        onChange={handleMoviesChange}
      />
      <button>Cerca</button>
      {/* <p>{JSON.stringify(movies)}</p> */}
    </form>
  );
}
