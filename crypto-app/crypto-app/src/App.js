import {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form"
import CoinDisplay from './components/CoinDisplay';
function App() {

const [coin, setCoin] = useState([]);

  const getCoin = async (searchTerm) => {
      const response = await fetch(
      `https://api.coincap.io/v2/assets/${searchTerm}`
      );
      
      const data = await response.json();
      
      setCoin(data.data);
  }

  useEffect(() => {
    getCoin('bitcoin')
  },[]);


  return (
    <div className="App">
    <Form coinsearch={getCoin} />
    <CoinDisplay coin ={coin} />

    </div>
  );
}

export default App;
