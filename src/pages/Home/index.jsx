import React from "react";
import Style from "./Style.css";
import Carousel from "../../componentes/Carousel";
import { Link as LinkHeader } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main className="container">
        <div>
          <article>
            <p>
              Find the perfect destination. Our app will help you find the
              perfect path for your next trip. With an easy-to-use interface and
              a host of itinerary options, planning your next trip has never
              been easier.
            </p>
            <button type="button" className="btn btn-primary">
              <LinkHeader id="btn-article" to="/Cities">View More</LinkHeader>
            </button>
          </article>
        </div>
        <div className="logo">
          <img
            className="logo-Mytinerary"
            src={"../public/logo-Mytinerary.jpg"}
            alt=""
          />
        </div>
      </main>

      <Carousel />
    </>
  );
}
