import React, { useRef } from "react";
import axios from "axios";
import Style from "./Style.css";

const SignIn = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/user/login", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      })
      .then((response) => {
        console.log(response.data.token);
            
        localStorage.setItem("token", response.data.token );//guarda el token en el localStorage

        let token = localStorage.getItem("token");
        console.log(token);//trae el token que esta en el localStorage

      })
      .catch((error) => 
        error.response.data.message.foreach(message => console.log(message)));
  };

  return (
    <main className="Main-SignIn">
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

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </main>
  );
};

export default SignIn;
