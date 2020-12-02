import logo from './logo.svg';
import './App.css';
import Row from './components/Row.js';
import Requests from './Requests'

function App() {
  return (
    <div className="App">
      <h1>hey trying to clone netflix</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={Requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />

    </div>
  );
}

export default App;
