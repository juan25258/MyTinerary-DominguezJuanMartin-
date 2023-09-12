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
                  <p>If you already have an account, <h5>Log in</h5></p>
                </button>
                <button type="button" className="btn btn-light">
                  <p>Sign up with Google</p>
                </button>
                <button type="button" className="btn btn-light">
                  <p>Sign up with your email</p>
                </button>
              </div>
              <div>
                <p>
                  By continuing, you confirm your agreement with our Terms of
                  Use and confirm that you have read our Statement Privacy and
                  Cookies. This site is protected by reCAPTCHA and the Privacy
                  Policy and the Google Terms of Service.
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
