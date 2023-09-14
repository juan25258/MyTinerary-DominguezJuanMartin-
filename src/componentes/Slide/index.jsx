import { Link as LinkDetails } from "react-router-dom";
import Details from "../../pages/Details";
import Style from "./Style.css";

export default function Slide({ cities }) {
  return (
    <div className="slide">
      {cities.map((city, index) => (
        <div className="cities" key={index}>
          <LinkDetails to="/Details">
            <img src={city.image} alt={`Slide ${index + 1}`} />
          </LinkDetails>
          <div className="description">
            <p id="city">{city.country}</p>
            <p id="city">{city.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
