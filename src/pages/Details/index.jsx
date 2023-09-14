import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Style.css";
import { fetchItinerariesAsync } from "../../Store/actions/itineraries";
import DetailsItineraries from "../../componentes/DetailsItineraries";
import { Link as LinkDetailsItineraries } from "react-router-dom";

export default function Details() {
  const selectedCity = useSelector((state) => state.selectedCity);
  const itineraries = useSelector((state) => state.selectedCity.itineraries); //esto tenia mal configurado y me mandaba a otro estado de redux!! agregue selectedCity en elmedio
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCity) {
      dispatch(fetchItinerariesAsync(selectedCity.id));
    }
  }, [selectedCity, dispatch]);

  return (
    <>
      <main className="mainCities">
        <div className="card" id="card-details">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={selectedCity.image} className="card-img" alt="" />
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
      </main>
      <h2>Itineraries</h2>
      <section className="itineraries">
        {itineraries && itineraries.length > 0 ? (
          itineraries.map((itinerary) => (
            <div key={itinerary.id}>
              <h4 className="autor">{itinerary.name}</h4>
              <div className="col">
                <img className="image-itinerary" src={itinerary.image} alt="" />

                <p>Duration: {itinerary.duration}</p>
                <p>{itinerary.hashtag}</p>
                <p>Likes: {itinerary.likes}</p>
                <p>
                  <LinkDetailsItineraries
                    id="btn-article"
                    to="/DetailsItineraries"
                    className="btn btn-primary"
                    href="#"
                  >
                    View details »
                  </LinkDetailsItineraries>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay itinerarios disponibles.</p>
        )}
      </section>
    </>
  );
}

