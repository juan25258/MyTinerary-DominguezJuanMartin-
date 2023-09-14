// Card.js
import React from "react";
import { useDispatch } from "react-redux";
import cities, { setFilter } from "../../Store/reducers/cities";
import { Link as LinkDetails } from "react-router-dom";
/* import { useHistory } from 'react-router-dom'; */
import { setSelectedCity } from "../../Store/reducers/cities";

export default function Card({ city }) {
  /* const history = useHistory(); */
  const dispatch = useDispatch();

  const handleDetailsClick = () => {
    //realizar las acciones que quiero que ocurran al hacer clic en el botón "Details"
    dispatch(setSelectedCity(city));
  };

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

        <LinkDetails
          id="btn-card"
          className="btn btn-primary"
          to="/Details"
          onClick={handleDetailsClick}
        >
          Details
        </LinkDetails>
      </div>
    </div>
  );
}
