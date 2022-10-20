import React from 'react'

function Display({gif}) {
    const loaded = () => {  
        return (
        <div>
          
            <h4>{gif.data.title}</h4>
            <img src={gif.data.images.fixed_height.url} alt="no gif loaded"/>
        </div>
  )
}
   // Function for when data doesn't exist
   const loading = () => {
    return <h1>No Gif loaded</h1>;
  };

  return gif ? loaded() : loading()
}

export default Display