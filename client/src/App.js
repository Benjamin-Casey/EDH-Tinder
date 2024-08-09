import axios from 'axios';
import './App.css';

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data);
  });
}

function App() {
  return (
    // TODO: replace this with some index.html - google naming convention
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Make API Call</button>
      </header>
    </div>
  );
}
