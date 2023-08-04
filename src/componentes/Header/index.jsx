import React from 'react'
import Style from './Style.css'
import Cities from '../../pages/Cities/Cities'


export default function Header() {
  return (
    <header>
            <nav className="navbar">
                <div className="container">
                  <a href="#" className="a-MyTinerary"><h2>My Tinerary</h2></a> 
                  <div className="botonesnav">
                    <button className="botonesnav1" type="button"><a href="#">Home</a></button>
                    <button className="botonesnav2" type="button"><a href="" target="_blank">Cities</a> </button>
                    <button type="button" className={"btn btn-primary"}> <a href="">Login</a></button>
                  </div>
                </div>
            </nav>
    </header>
  )
}
