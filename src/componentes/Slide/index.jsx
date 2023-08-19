import React from 'react'

export default function Slide({city}) {
  return (
    <div className="slide">
        {city && (
            <div className='cities'>
                <img src={city.image} alt={city.name} />
                <div className="description">
                    <p>{city.country}</p>
                    <p>{city.name}</p>
                </div>
            </div> 
        )}
    </div>
  )
}




