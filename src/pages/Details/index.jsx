import React from "react";
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
    <div>
      <h1>{selectedCity.name}</h1>
      <p>Población: {selectedCity.population}</p>
      <p>{selectedCity.country}</p>
    </div>
  );
}
