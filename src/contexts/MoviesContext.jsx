// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
// film trovato:
// 1. Titolo
// 2. Titolo Originale
// 3. Lingua
// 4. Voto
// Qui si fa la chiamata all'api dei Film e la mettiamo visibile in tutta l'app

import axios from "axios";

import { createContext, useContext, useEffect, useState } from "react";
const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const apiUri = "https://api.themoviedb.org/3";
  const apiKey = "dfebb00f8db50f1ee8131c7e1010b080";

  const fetchMovies = () => {
    axios
      .get(`${apiUri}/search/movie?api_key=${apiKey}&query=${query}`)
      .then((res) => {
        const response = res.data.results;
        console.log(response);
        setMovies(response);
      });
  };

  useEffect(fetchMovies, []);

  const moviesData = { movies, query, fetchMovies, setQuery };

  return (
    <MoviesContext.Provider value={moviesData}>
      {children}
    </MoviesContext.Provider>
  );
}

function useMovies() {
  return useContext(MoviesContext);
}

export { MoviesProvider, useMovies };
