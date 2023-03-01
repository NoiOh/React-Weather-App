import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">Weather Search Engine</header>
      <Search />
      <footer>
        <a
          href="https://github.com/NoiOh/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Noi Houangvan
      </footer>
    </div>
  );
}

export default App;
