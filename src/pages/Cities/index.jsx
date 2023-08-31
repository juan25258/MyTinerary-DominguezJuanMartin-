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

import React, { useEffect } from "react";
import Style from "./Style.css";
import axios from "axios";
import Card from "../../componentes/Card";
import { useSelector, useDispatch } from 'react-redux';
import { setCities, setFilter } from '../../Store/reducers/cities';

export default function Cities() {
  const cities = useSelector((state) => state.cities.cities);
  const filter = useSelector((state) => state.cities.filter);
  const dispatch = useDispatch();

  const fetchCitiesData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/cities?filter=${filter}`
      );
      dispatch(setCities(response.data));
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  useEffect(() => {
    fetchCitiesData();
  }, []);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleSearchClick = () => {
    fetchCitiesData();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearchClick();
    }
  };

  const handleDetailsClick = (cityId) => {
    // Aquí puedes realizar las acciones que desees al hacer clic en el botón "Details"
    console.log(`Details clicked for city with ID: ${cityId}`);
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
                <Card key={city.id} city={city} handleDetailsClick={handleDetailsClick} />
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
