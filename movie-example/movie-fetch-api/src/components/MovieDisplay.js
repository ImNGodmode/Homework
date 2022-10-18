import React from 'react'

function MovieDisplay({movie}) {

    const loaded =() => {
        return (
            <>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre} {movie.Year} {movie.Rated} </h2>
            <h3>Metascore {movie.Metascore}</h3>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Plot}</p>
            </>
        )
        }

   

    const loading =()=> {
        return "Movie not available"
    }

    return movie ? loaded() : loading()
}
export default MovieDisplay