// import { useMovies } from "../../contexts/MoviesContext";
import axios from "axios";
import { useEffect } from "react";

import { useMovies } from "../../contexts/MoviesContext";

export default function Main() {
  const { movies } = useMovies();

  return (
    <main>
      <h1>Qui visualizzo a schermo i dati dell'api</h1>

      <ul>
        {movies.map((movie, i) => (
          <>
            <li>{`TITOLO: ${movie.title}`}</li>
            <li>{`TITOLO ORIGINALE: ${movie.original_title}`}</li>
            <li>{`LINGUA: ${movie.original_language}`}</li>
            <li>{`VOTO: ${movie.vote_average}`}</li>
          </>
        ))}
      </ul>
    </main>
  );
}
