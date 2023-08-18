import React from 'react'

export default function Slide({cities}) {
  return (
    <div className="slide">
      {cities.map((cities, index) => (
        <>
            <div className='cities'>
                <img key={index} src={cities.image} alt={`Slide ${index + 1}`} />
                <div className="description">
                    <p>{cities.country}</p>
                    <p>{cities.city}</p>
                </div>
            </div>    
        </>
      ))}
    </div>
  )
}  





