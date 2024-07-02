import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      {/* <TodoFeature></TodoFeature> */}
      <AlbumFeature></AlbumFeature>
    </div>
    
  );
}

export default App;
