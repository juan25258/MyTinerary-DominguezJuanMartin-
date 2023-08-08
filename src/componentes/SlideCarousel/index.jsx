import React from 'react'
/* import Style from './Style.css' */


export default function SlideCarousel({src, alt}) {


  return (
    <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
            <img className='imgcarousel1' src={src} alt={alt} ></img>
            <img className='imgcarousel1' src={src} alt={alt} ></img>
            <img className='imgcarousel1' src={src} alt={alt} ></img>
            <img className='imgcarousel1' src={src} alt={alt} ></img>   
        </div>  
    </div> 
    
  )
}
