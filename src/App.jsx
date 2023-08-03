import { useState } from 'react'
import logoMontaña from './assets/images.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
/* import { Button } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'; */

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
            <nav class="navbar">
                <div class="container">
                  <a href="" target='_blank' class="a-MyTinerary"><h2>My Tinerary</h2></a> 
                  <div class="botonesnav">
                    <button class="botonesnav1" type="button">Home</button>
                    <button class="botonesnav2" type="button">Cities</button>
                    <button type="button" class={"btn btn-primary"}>Login</button>
                  </div>
                </div>
            </nav>  
      </header>
      
      <main>
          {/* <div>
            <p>Find the perfect destination
Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <button type="button" class="btn btn-primary">View More</button>
          </div>
          <div>
              <img class="logomontaña" src={logoMontaña} alt="Logomontaña" />
          </div>  */}
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

      </main>


      {/* <footer>
          <p>Footercitooo...</p>
      </footer> */}
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
        </div>
        
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-whatsapp"></i></a></li>
          <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-instagram"></i></a></li>
          <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-facebook"></i></a></li>
        </ul>
      </footer>
    </>
  )
}

export default App
