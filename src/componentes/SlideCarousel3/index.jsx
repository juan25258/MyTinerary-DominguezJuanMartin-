import React from 'react'
import Style from './Style.css'


export default function SlideCarousel3({src, alt}) {


  return (
    <div className="carousel-inner" role="listbox">
                
        <div className="carousel-item">
            <img className='imgcarousel3' src={src} alt={alt} ></img>
            <img className='imgcarousel3' src={src} alt={alt} ></img>
            <img className='imgcarousel3' src={src} alt={alt} ></img>
            <img className='imgcarousel3' src={src} alt={alt} ></img>
  
        </div>
                 
    </div> 
    
  )
}