import {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import SavedMovies from "./components/SavedMovies";




function App() {
  
  const apiKey = "2443242d"
  const [movie, setMovie] = useState(null)
   //Function to getMovies
   const getMovie = async (searchTerm) => {
    // make fetch request and store response
      
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };
  
  useEffect(() => {
    getMovie("Avengers");
  }, []);

  const [moviesArray, updateMoviesArray] = useState([])

  const saveMovie = () => {
    updateMoviesArray(oldarray => [...oldarray,movie])
    // moviesArray.unshift(movie)
    // console.log(moviesArray)
  } 
  return (
    <div className="App">
       
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie} /> 
      {/* <button onClick={saveMovie}>SAVE MOVIE!</button> 
      <SavedMovies list={moviesArray} /> */}

    </div>
  );
}

export default App;
