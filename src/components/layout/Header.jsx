import Filters from "./Filters";

export default function Header() {
  return (
    <header>
      <div className="container d-flex justify-content-between ">
        <h1>Boolix</h1>

        <Filters></Filters>
      </div>
    </header>
  );
}
