import { useSearch } from "../../contexts/SearchContext";

export default function Filters() {
  // const [query, setQuery] = useState("");
  const { fetchMovies, fetchSeries, setQuery, query } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
    fetchSeries();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-1">
      <input
        type="text"
        name="query"
        value={query}
        placeholder="Cerca un film ..."
        onChange={handleChange}
        className="input-group"
      />
      <button className="btn btn-secondary">Cerca</button>
      {/* <p>{JSON.stringify(movies)}</p> */}
    </form>
  );
}
