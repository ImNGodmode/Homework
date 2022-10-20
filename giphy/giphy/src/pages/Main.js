import {React, useState} from "react";
import Button from "../components/Button"
import Display from "../components/Display";

function Main() {
  const [gif, setGif] = useState(null)
  const apiKey = "wVRs7t1DQcwGOUBGJ5SNPTJN2EQQi7rd"
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`

  const getGif = async () => {
      try{
        const response = await fetch(url);
        const data = await response.json();
        setGif(data);
        console.log(data)
      } catch(e){
        console.error(e)
      }
    };
      return(
        <>
          <Button getGif={getGif} />
          <Display gif={gif}/>
        </>
        
      )
}

export default Main