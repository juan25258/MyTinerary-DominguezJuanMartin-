/* import React from "react";
import Style from "./Style.css";
import { useSelector } from "react-redux";
import { selectedCitySelector } from "../../Store/reducers/cities";

export default function Details() {
  const selectedCity = useSelector(selectedCitySelector);

  console.log(selectedCity.population);

  if (!selectedCity) {
    return <div>No se ha seleccionado ninguna ciudad</div>;
  }

  return (
    <>
    <div>
      <h1>{selectedCity.name}</h1>
      <img src={selectedCity.image} alt="" />
      <p>Población: {selectedCity.population}</p>
      <p>{selectedCity.country}</p>
    </div>
    <div>
      <h1>Itinerary {}</h1>
    </div>
    </>
    
    
  );
} */

import React, { useEffect } from "react";
import Style from "./Style.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { selectedCitySelector } from "../../Store/reducers/cities";
import { setItineraries, itinerariesSelector } from "../../Store/reducers/itineraries";

export default function Details() {
  const selectedCity = useSelector(selectedCitySelector);
  const itineraries = useSelector(itinerariesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItineraryData = async () => {
      if (selectedCity) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/itineraries?cityId=${selectedCity.id}`
          );
          dispatch(setItineraries(response.data));
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching itineraries:', error);
        }
      }
    };

    fetchItineraryData();
  }, [selectedCity, dispatch]);

  if (!selectedCity) {
    return <div>No se ha seleccionado ninguna ciudad</div>;
  }

  return (
    <>
    <div>
      <h1>{selectedCity.name}</h1>
      <img src={selectedCity.image} alt="" />
      <p>Población: {selectedCity.population}</p>
      <p>{selectedCity.country}</p>
    </div>
    <div>
      <h1>Itinerary</h1>
      {itineraries.map((itinerary) => (
        <div key={itinerary.id}>
          <p>{itinerary.Price}</p>
        </div>
      ))}
    </div>
    </>
  );
}
