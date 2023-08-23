import React from "react";
import Style from "./Style.css";
import { Link as LinkHeader } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-0 border-top">
        <p id="col1-footer" class="col-md-4 mb-0 text-primary">
          © 2023 Company, Inc
        </p>

        <ul id="col2-footer" class="nav col-md-4 justify-content-center">
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              <LinkHeader to="/">Home</LinkHeader>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              <LinkHeader to="/Cities">Cities</LinkHeader>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              <LinkHeader to="/Details">Details</LinkHeader> 
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              About
            </a>
          </li>
        </ul>

        <a href="/" class="">
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
        </a>
      </footer>
    </>
  );
}
