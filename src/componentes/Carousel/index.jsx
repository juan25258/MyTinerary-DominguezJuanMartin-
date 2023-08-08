import React from 'react'
import Style from './Style.css'
import SlideCarousel from '../SlideCarousel'
import SlideCarousel2 from '../SlideCarousel2'
import SlideCarousel3 from '../SlideCarousel3'

export default function Carousel() {
 let data = [
        {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 1'},
        {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 2'},
        {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 3'},
        {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 4'},
      /*   {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 5'},
        {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 6'},
        {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 7'},
        {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 8'},
        {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 9'},
        {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 10'},
        {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 11'},
        {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU',alt:'imagen 12'}, */
      ]
 
    
  return (
    <>
        <section>
            <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className='imgcarousel1' className="carousel-item active">
                        {data.map((each,key)=><SlideCarousel key={key} src={each.src} alt={each.alt}/>)}
                        
                        
                    </div>
                    <div className='imgcarousel2' className="carousel-item">
                        {data.map((each,key)=><SlideCarousel2 key={key} src={each.src} alt={each.alt}/>)}
                        
                        
                    </div>
                    <div className='imgcarousel3' className="carousel-item">
                        {data.map((each,key)=><SlideCarousel3 key={key} src={each.src} alt={each.alt}/>)}
                        
                        
                    </div>
                    {/* <div className="carousel-item">
                        <img className='imgcarousel2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU" alt="Second slide" ></img>
                        <img className='imgcarousel2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU" alt="Second slide" ></img>
                        <img className='imgcarousel2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU" alt="Second slide" ></img>
                        <img className='imgcarousel2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU" alt="Second slide" ></img>
                        
                    </div>
                    <div className="carousel-item">
                        <img className='imgcarousel3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU" alt="third slide" ></img>
                        <img className='imgcarousel3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU" alt="third slide" ></img>
                        <img className='imgcarousel3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU" alt="third slide" ></img>
                        <img className='imgcarousel3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU" alt="third slide" ></img>
                        
                    </div>   */} 
                        
                    
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    </>
    
  )
}


