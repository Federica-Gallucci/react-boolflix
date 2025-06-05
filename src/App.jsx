import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { MoviesProvider } from "./contexts/MoviesContext";

function App() {
  return (
    <>
      <MoviesProvider>
        <Header></Header>

        <Main></Main>
      </MoviesProvider>
    </>
  );
}

export default App;
