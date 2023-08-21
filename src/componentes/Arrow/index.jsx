import React from "react";
import Style from "./Style.css";

const Arrow = ({ src, alt, fn }) => {
  return (
    <div className="flechas" onClick={fn}>
      <img className="flecha" src={src} alt={alt} />
    </div>
  );
};

export default Arrow;
