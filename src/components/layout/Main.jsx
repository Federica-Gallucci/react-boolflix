import ProductionList from "../productions/ProductionList";
import { useSearch } from "../../contexts/SearchContext";

export default function Main() {
  const { movies, series } = useSearch();
  return (
    <main>
      <h3>Movies</h3>
      <ProductionList searchEl={movies} />
      <hr></hr>
      <h3>Series TV</h3>
      <ProductionList series={series} />
    </main>
  );
}
