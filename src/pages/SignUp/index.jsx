import React from "react";
import Style from "./Style.css";

const SignUp = () => {
  return (
    <main className="sign-up">
      <section id="register" className="row g-3">
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>

        <div classectione="col-md-4">
          <label for="inputState" className="form-label">
            Country
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
          <label for="inputPassword4" className="form-label">
            Repeat Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              I agree to the terms of registration
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
