import { useSearch } from "../../contexts/SearchContext";
import Card from "../layout/Card";

export default function ProductionList({ searchEl }) {
  const { movies, series } = useSearch();

  return (
    <>
      <div className="container">
        <div className="row col-4">
          {movies.map((movie) => (
            <Card product={movie} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-4">
            {series.map((serie) => (
              <Card product={serie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
