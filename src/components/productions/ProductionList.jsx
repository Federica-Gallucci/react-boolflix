import { useSearch } from "../../contexts/SearchContext";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductionList({ searchEl }) {
  const { movies, series } = useSearch();

  return (
    <>
      <div>
        {movies.map((movie) => (
          <>
            <ul key={movie.id}>
              <li>{`TITOLO: ${movie.title}`}</li>
              <li>{`TITOLO ORIGINALE: ${movie.originalTitle}`}</li>
              <li>{`LINGUA: ${movie.language}`}</li>
              <li>
                Bandiera: <img className="flag" src={movie.languageFlag} />
              </li>
              <li>{`VOTO: ${movie.rating}`}</li>
              {/* <li>
                VOTO:
                {movie.rating.map((rat, i) => (
                  <FontAwesomeIcon icon={faStar} />
                ))}
              </li> */}
              <li>
                Poster: <img src={movie.poster} />
              </li>
            </ul>
          </>
        ))}
      </div>

      <div>
        {series.map((serie) => (
          <>
            <ul key={serie.id}>
              <li>{`TITOLO: ${serie.title}`}</li>
              <li>{`TITOLO ORIGINALE: ${serie.originalTitle}`}</li>
              <li>{`LINGUA: ${serie.language}`}</li>
              <li>
                Bandiera: <img className="flag" src={serie.languageFlag} />
              </li>
              <li>{`VOTO: ${serie.rating}`}</li>
              <li>
                Poster: <img src={serie.poster} />
              </li>
            </ul>
          </>
        ))}
      </div>
    </>
  );
}
