import axios from "axios";

import itFlag from "../assets/img/it.png";
import usFlag from "../assets/img/us.png";
import unknowFlag from "../assets/img/unknowFlag.png";

import { createContext, useContext, useState } from "react";
const SearchContext = createContext();

const apiUri = import.meta.env.VITE_THEMOVIEDB_API_URL;
const apiKey = import.meta.env.VITE_THEMOVIEDB_API_KEY;

function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const getFlagFromLangCode = (lang) => {
    if (lang === "it") return itFlag;
    if (lang === "en") return usFlag;
    return unknowFlag;
  };

  const fetchMovies = () => {
    axios
      .get(`${apiUri}/search/movie?api_key=${apiKey}&query=${query}`)
      .then((res) => {
        const resultMovies = res.data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          originalTitle: movie.original_title,
          language: getFlagFromLangCode(movie.original_language),
          languageFlag: itFlag,
          rating: movie.vote_average,
        }));
        console.log("Movies:");
        console.log(resultMovies);

        setMovies(resultMovies);
      });
  };

  const fetchSeries = () => {
    axios
      .get(`${apiUri}/search/tv?api_key=${apiKey}&query=${query}`)
      .then((res) => {
        console.log(res.data.results);

        const resultSeries = res.data.results.map((serie) => ({
          id: serie.id,
          title: serie.name,
          originalTitle: serie.original_name,
          language: serie.original_language,
          languageFlag: getFlagFromLangCode(serie.original_language),
          rating: serie.vote_average,
        }));
        console.log("Serie tv");
        console.log(resultSeries);
        setSeries(resultSeries);
      });
  };

  const SearchData = {
    movies,
    series,
    query,

    fetchMovies,
    fetchSeries,
    setQuery,
  };

  return (
    <SearchContext.Provider value={SearchData}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  return useContext(SearchContext);
}

export { SearchProvider, useSearch };
