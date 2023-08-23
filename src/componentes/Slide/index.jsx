import { Link as LinkDetails } from "react-router-dom";
import Details from "../../pages/Details";

export default function Slide({ cities }) {
  return (
    <div className="slide">
      {cities.map((city, index) => (
        <div className="cities" key={index}>
          <LinkDetails to="/Details">
            <img src={city.image} alt={`Slide ${index + 1}`} />
          </LinkDetails>
          <div className="description">
            <p>{city.country}</p>
            <p>{city.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
