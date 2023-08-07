import React from 'react'
import Style from './Style.css'

export default function Carousel() {
  return (
    <section>
        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img className='imgcarousel1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU" alt="First slide" ></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>
                    <img className='imgcarousel2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU" alt="First slide" ></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>
                    <img className='imgcarousel3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU" alt="First slide" ></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>
                    <img className='imgcarousel4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU"  alt="First slide" ></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>
                </div>
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
  )
}


