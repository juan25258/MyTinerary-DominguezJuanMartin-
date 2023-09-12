import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Style.css";
import { fetchItinerariesAsync } from "../../Store/actions/itineraries";

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
        <div className="card mb-3" style={{ paddingRight: "max-width= 540px" }}>
          <div className="row g-0">
            <div  className="col-md-4" >
              <img 
                src={selectedCity.image}
                className="img-fluid rounded-start "
                alt=""
              />
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
      <section>
          <h2>{selectedCity.name} Itineraries</h2>

          {itineraries && itineraries.length > 0 ? (
            itineraries.map((itinerary) => (
              <div key={itinerary.id}>
                
                <p>{itinerary.name}</p>
                <img src={itinerary.image} alt="" />
                
              </div>
            ))
          ) : (
            <p>No hay itinerarios disponibles.</p>
          )}
        </section>
    </>
  );
}
