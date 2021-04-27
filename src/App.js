import logo from "./logo.svg";
import "./App.css";
import Puzzle from "./components/Puzzle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Puzzle />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
