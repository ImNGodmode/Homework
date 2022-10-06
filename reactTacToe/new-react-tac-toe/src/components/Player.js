import React from 'react'

function Player(props) {
  return (
    <>
        <h2>Player {props.whichPlayer}</h2>
        <h3>Wins: </h3>
        <p> Score: {props.score}</p>
    
    
    
    </>
  )
}

export default Player