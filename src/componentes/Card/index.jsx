// Card.js
import React from "react";
import { Link as LinkDetails } from "react-router-dom";

export default function Card({ city }) {
  return (
    <div className="card">
      <img src={city.image} className="card-img-top" alt={city.name} />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-center">
          {city.country}
        </h5>
        <h5 className="card-title d-flex justify-content-center">
          {city.name}
        </h5>
        <p className="card-text">{city.details}</p>
        <a href="#" className="btn btn-primary">
          <LinkDetails id="btn-card" to="/Details">
            Details
          </LinkDetails>{" "}
        </a>
      </div>
    </div>
  );
}

