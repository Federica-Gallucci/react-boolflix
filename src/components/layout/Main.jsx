import ProductionList from "../productions/ProductionList";
import { useSearch } from "../../contexts/SearchContext";

export default function Main() {
  const { movies, series } = useSearch();
  return (
    <main>
      <h3>Film trovat:</h3>
      <ProductionList searchEl={movies} />
      <hr></hr>
      <h3>Serie trovate:</h3>
      <ProductionList series={series} />
    </main>
  );
}
