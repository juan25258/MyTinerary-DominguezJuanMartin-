/* import React, { useEffect } from "react";
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
            `http://localhost:5000/api/cities?filter=${selectedCity.id}`
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
            `http://localhost:5000/api/itineraries?filter=${selectedCity._id}&country=${selectedCity._id}`
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
      
      <div className="card mb-3" style={{ paddingRight: "max-width= 540px"}}>
        <div className="row g-0">
          <div class="col-md-4">
            <img src={selectedCity.image} class="img-fluid rounded-start " alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{selectedCity.name}</h5>
              <p className="card-text">{selectedCity.country}</p>
              <p className="card-text">{selectedCity.details}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Itinerary</h1>
        {itineraries.length === 0 ? (
          <p>No itineraries available</p>
        ) : (
          itineraries.map((itinerary) => (
            <div key={itinerary._id}>
              <p>Price: ${itinerary.Price}</p>
              <p>Likes: {itinerary.Likes}</p>
              <p>Hashtags: {itinerary.Hashtag}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

