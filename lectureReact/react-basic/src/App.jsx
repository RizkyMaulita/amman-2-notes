import './App.css';
import Home from './Page/Home';

function tambah (nilai1, nilai2) {
  return nilai1 + nilai2
}

function App() {
  return (
    <div className="App">
      <Home />
      {/* <h1>React Basic</h1>
      <button className="btn btn-danger">Close</button> */}
    </div>
  );
}

export default App;
