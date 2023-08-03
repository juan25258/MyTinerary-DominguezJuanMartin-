import React from 'react'

export default function Header() {
  return (
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
  )
}
