import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sign_up } from "./signupAction";

export const sign_in = createAsyncThunk("user/sign_in", async (payload) => {
  try {
    let { email, password } = payload;

    const user = await axios
      .post("http://localhost:5000/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log("Successfully logged in");
        return response.data.user;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.message);
        }
      });

    return {
      user: user,
    };
  } catch (e) {
    console.log(e.message);
  }
});

const authenticate = createAsyncThunk("authenticate", async () => {
  try {
    let token = localStorage.getItem("token");
    //console.log(token);
    let user = await axios
      .post("http://localhost:5000/api/user/authenticated", null, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log("Authenticated successfully");
        localStorage.setItem("token", response.data.token);
        return response.data.user;
      });
        console.log(user);

        return {
            user: user
        }
    
  } catch (error) {
    console.log(error.message);
  }
});

const sign_out = createAsyncThunk("sign_out", async() => {
    try {
         axios.post("http://localhost:5000/api/user/logout")   
        .then((response) => {
            localStorage.removeItem("token");

            console.log(response)})
            
    } catch (error) {
        console.log(error.message);
    }
});

/* const sign_up = createAsyncThunk("user/sign_up", async (payload) => {
  try {
    const response = await axios.post("http://localhost:5000/api/user/register", payload);
    localStorage.setItem("token", response.data.token);
    console.log("Successfully signed up");
    return response.data.user;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
    }
    throw error;
  }
}); */

const userActions = {
  sign_in,
  authenticate,
  sign_out,
  sign_up,
};

export default userActions;
