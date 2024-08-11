import axios from 'axios';
import './App.css';

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data);
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <button onClick={apiCall}>Make API Call</button>
        </h1>
      </header>
    </div>
  );
}
export default App;