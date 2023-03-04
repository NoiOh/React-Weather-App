import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defaultCity="Atlanta" />

        <footer>
          <a
            href="https://github.com/NoiOh/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source coded
          </a>{" "}
          by Noi Houangvan
        </footer>
      </div>
    </div>
  );
}

export default App;
