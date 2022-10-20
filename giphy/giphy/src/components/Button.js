import React from 'react'

function button(props) {

    const getGif = () => {
        props.getGif()
    }
  return (
   <div className='btn' onClick={getGif}>New Gif!</div>
  )
}

export default button