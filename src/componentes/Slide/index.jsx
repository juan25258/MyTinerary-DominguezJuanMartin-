import React from 'react'

export default function Slide({images}) {
  return (
    <div className="slide">
      {images.map((images, index) => (
        <>
            <div className='cities'>
                <img key={index} src={images.image} alt={`Slide ${index + 1}`} />
                <div className="description">
                    <p>{images.country}</p>
                    <p>{images.city}</p>
                </div>
            </div>

            
        </>
      ))}
    </div>
  )
}





