import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />

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
