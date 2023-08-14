import React from 'react'
import Style from './Style.css'

export default function Footer() {
  return (
    <>
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <p class="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

              <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
              </a>

              <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
              </ul>
        </footer>
    </>
  )
}


        {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="https://web.whatsapp.com/" target='_blank'><i className="bi bi-whatsapp"></i></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com/" target='_blank'><i className="bi bi-instagram"></i></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="https://www.facebook.com/" target='_blank'><i className="bi bi-facebook"></i></a></li>
        </ul> */}



