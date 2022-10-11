import React from 'react'

function CoinDisplay({coin}) {
    const loaded =() => {
        return (
            <>
            <h1>{coin.name}{' ('}{coin.symbol}{') '} Rank:{coin.rank}</h1>
            <hr/>
            <h2>Price:{' $'}{parseFloat(coin.priceUsd).toFixed(2)}</h2>
            {console.log(coin)}
            </>
        )
        }

   

    const loading =()=> {
        return "coin not available"
    }

    return coin ? loaded() : loading()
  
}

export default CoinDisplay