import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Header></Header>

        <Main></Main>
      </SearchProvider>
    </>
  );
}

export default App;
