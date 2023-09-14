import React, { useState, useEffect } from "react";
import Style from "./Style.css";
import { Link as LinkDetails } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import selectedCityReducer from "../../store/reducers/selectedCity";
import selectedCityActions from "../../store/actions/selectedCity";

const fetchCitiesAsync = createAsyncThunk(
  "cities/fetchCities",
  async (filter) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/cities?filter=${filter}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching cities:", error);
      throw error;
    }
  }
);

export default function Cities() {
  let [cities, setCities] = useState([]);
  let [filter, setFilter] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCitiesAsync(filter))
      .unwrap()
      .then((response) => {
        // Filtrar por inicio de palabras antes de actualizar el estado
        const filteredCities = response.filter((city) => {
          return (
            city.name.toLowerCase().startsWith(filter.toLowerCase()) ||
            city.country.toLowerCase().startsWith(filter.toLowerCase())
          );
        });
        setCities(filteredCities);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, [dispatch, filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    dispatch(fetchCitiesAsync(event.target.value)).catch((error) => {
      console.error("Error fetching cities:", error);
      setError(error);
    });
  };
  /* const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }; */

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita el comportamiento por defecto (por ejemplo, enviar un formulario)
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
                  <LinkDetails
                    className="btn btn-primary"
                    to="/Details"
                    onClick={() =>
                      dispatch(selectedCityActions.setSelectedCity(city))
                    }
                  >
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
