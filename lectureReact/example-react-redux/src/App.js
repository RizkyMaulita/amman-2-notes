import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
  const stateRedux = useSelector((state) => state)

  // console.log(stateRedux, '<<< state redux di app')
  return (
    <div>
      <Navbar />
      {/* <Register /> */}
      {
        stateRedux?.name
        ? null
        : <Register />
      }
      <div>
        Test React Redux
      </div>
      {JSON.stringify(stateRedux)}
    </div>
  );
}

export default App;
