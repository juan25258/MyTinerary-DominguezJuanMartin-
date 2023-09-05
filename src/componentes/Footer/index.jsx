import React from "react";
import Style from "./Style.css";
import { Link as LinkHeader } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-0 border-top">
        <p id="col1-footer" className="col-md-4 mb-0 text-primary">
          © 2023 Company, Inc
        </p>

        <ul id="col2-footer" className="nav col-md-4 justify-content-center">
          <li className="nav-item">
            <LinkHeader className="nav-link px-2" to="/">
              Home
            </LinkHeader>
          </li>
          <li className="nav-item">
            <LinkHeader className="nav-link px-2" to="/Cities">
              Cities
            </LinkHeader>
          </li>
          <li class="nav-item">
            <LinkHeader className="nav-link px-2" to="/Details">
              Details
            </LinkHeader>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              About
            </a>
          </li>
        </ul>

        <ul className="social-medias">
          <li className="ms-3">
            <a
              className="text-success"
              href="https://web.whatsapp.com/"
              target="_blank"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="color-instagram"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-primary"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
