import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Price (props) {
  // Our api key from coinapi.io
  const apiKey = "626F02FA-451C-49E2-95F9-46EC1C46D45A";
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  //state to hold the coin data
  const [coin, setCoin] = useState("null");

  //function to fetch coin data
  // const getCoin = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setCoin(data);
  // };

  const getCoin = async () => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch(e){
      console.error(e)
    }
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h3>{coin.rate}</h3>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin && coin.rate ? loaded() : loading();
};