/* import React, { useEffect, useState } from "react";
import Style from "./Style.css";
import { Link as LinkDetails } from "react-router-dom";

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchCities();
  }, [filter]);

  const fetchCities = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/Cities?filter=${filter}`
      );
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  }; */
//en el codigo de arriba usé fetch y en el de abajo axios(ambos funcionan bien):

import React, { useState, useEffect } from "react";
import Style from "./Style.css";
import { Link as LinkDetails } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import citiesReducer from "../../Store/reducers/cities";
import citiesActions from "../../Store/actions/cities";
import { useDispatch } from "react-redux";
import { store } from "../../Store/store";

export default function Cities() {
  let [cities, setCities] = useState([]);
  let [filter, setFilter] = useState("");
  let citiesReducer = useSelector((store) => store.citiesReducer);
  console.log(citiesReducer);

  const fetchCities = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/cities?filter=${filter}`
      );
      console.log();
      setCities(response.data);
      dispatch(citiesActions.add_cities(response.data));
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/cities?filter=${filter}`)
      .then((response) => {
        setCities(response.data);
        dispatch(citiesActions.add_cities(response.data));
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchClick = () => {
    fetchCities();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita el comportamiento por defecto (por ejemplo, enviar un formulario)
      handleSearchClick();
    }
  };

  return (
    <>
      <main>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                id="searchInput"
                placeholder="Search"
                aria-label="Search"
                onChange={handleFilterChange}
                onKeyDown={handleKeyDown}
                value={filter}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={handleSearchClick}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <article className="City container">
          <h2 className="d-flex justify-content-center">Cities</h2>
          <div className="card-deck d-flex flex-wrap justify-content-center gap-5">
            {cities.map((city) => (
              <div className="card" key={city.id}>
                <img
                  src={city.image}
                  className="card-img-top"
                  alt={city.name}
                />
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center">
                    {city.country}
                  </h5>
                  <h5 className="card-title d-flex justify-content-center">
                    {city.name}
                  </h5>
                  <p className="card-text">{city.details}</p>
                  <LinkDetails className="btn btn-primary" to="/Details">
                    Details
                  </LinkDetails>{" "}
                </div>
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
