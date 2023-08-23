import React from "react";
import Style from "./Style.css";
import { Link as LinkHeader } from "react-router-dom";
import Home from "../../pages/Home";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="a-MyTinerary">
            <h1>My Tinerary</h1>
          </a>
          <div className="botonesnav">
            <button className="btn btn-secondary" type="button">
              <LinkHeader id="btn-nav" to="/">Home</LinkHeader>
            </button>
            <button className="btn btn-secondary" type="button">
              <LinkHeader id="btn-nav" to="/Cities">Cities</LinkHeader>
            </button>
            <button type="button" className="btn btn-primary">
              {" "}
              <a id="btn-nav" href="">Login</a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
