import logo from './logo.svg';
import './App.css';

function App() {
  const name="hello world"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
