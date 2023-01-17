import React from 'react'

const City = ({city}) => {
  return (
    <div>
        <div className='weather-status'>
            <span>City: {city?.name}</span>
            <span>Temperature: {city?.main?.temp}</span>
            <span>Status: {city?.weather[0]?.main}</span>
        </div>
    </div>
  )
}

export default City