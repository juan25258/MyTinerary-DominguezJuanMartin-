import React from 'react'

export default function Body() {
  return (
    <body>
                    <section>
                      <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPa4pu-6tbBpkxe9Y3b8MjTOpUr2nsG-eVA&usqp=CAU"
                              class="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ97DmYhRYGb7hV4WnmgGJG8FX_TX4D5YBbQ&usqp=CAU"
                              class="d-block w-100"
                              alt=".."
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eq6ux8xkZUrq-93nnV-DZ9d3BSRrCwGAPA&usqp=CAU"
                              class="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          class="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide="prev"
                        >
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide="next"
                        >
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </section>

      </body>
  )
}
