import React from "react";

export default function buttonLogin() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Login
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                MyTinerary
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>Inicia sesión para acceder a lo mejor de MyTinerary</h5>
              <div>
                <button type="button" className="btn btn-light">
                  <p>Continue with Google</p>
                </button>
                <button type="button" className="btn btn-light">
                  <p>Continue with your email</p>
                </button>
              </div>
              <div>
                <p>
                  Al continuar, confirmás tu conformidad con nuestras
                  Condiciones de Uso y confirmás que leíste nuestra Declaración
                  de Privacidad y Cookies. Este sitio está protegido por
                  reCAPTCHA y se aplican la Política de Privacidad y los
                  Términos de Servicio de Google.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
