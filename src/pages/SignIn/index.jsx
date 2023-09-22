import React, { useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { sign_in } from "../../store/actions/user"; 
import Style from "./Style.css";
import { Link, Link as LinkSign } from "react-router-dom";

const SignIn = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      sign_in({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      })
    );
  };

  return (
    <main>
      <form id="form-SignIn" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailInputRef}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={passwordInputRef}
          />
        </div>

        <button type="submit" className="btn btn-primary login">
          Login
        </button>
        <div className="register">
          <p className="account">Don't have an account?</p>
          <LinkSign to="/SignUp"><h5>Register</h5></LinkSign>
        </div>
        
        
      </form>
    </main>
  );
};

export default SignIn;
