import React, { useState } from "react";
import Style from "./Style.css";
import { useDispatch } from "react-redux";
import { sign_up } from "../../store/actions/signupAction";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    image: "",
    country: "",
  });

  const [showForm, setShowForm] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(sign_up(userData));
      setSuccessMessage("Usuario registrado exitosamente");
      setShowForm(false); // Ocultar el formulario
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  const dispatch = useDispatch();

  return (
    <main className="sign-up">
      <section id="register" className="row g-3">
        {showForm ? (
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="row g-3">
            <div className="col">
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="lastname"
                value={userData.lastname}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="form-control"
              id="inputEmail4"
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Country
            </label>
            <select
              id="inputState"
              name="country"
              value={userData.country}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="" selected>
                Choose...
              </option>
              <option value="Option1">Argentina</option>
              <option value="Option2">France</option>
              <option value="Option3">Brazil</option>
              <option value="Option4">Italy</option>
              <option value="Option5">Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="form-control"
              id="inputPassword4"
            />
            <label htmlFor="inputPassword4" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                I agree to the terms of registration
              </label>
            </div>
          </div>
          {successMessage && <div className="success">{successMessage}</div>}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          </form>
        ) : (
          <div className="success-message">
            <p>{successMessage}</p>
            <p>Now you can log in with your new account.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default SignUp;
