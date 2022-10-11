import React from 'react'
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Link to={`/price/BTC`}>
        <img className='mainPic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAOyMYvME6NpzKYurQILiEtGnZmsfeSvWtw&usqp=CAU'></img>
      </Link>
    </div>
  )
}

export default Main