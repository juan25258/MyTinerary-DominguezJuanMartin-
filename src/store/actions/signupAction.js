import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const sign_up = createAsyncThunk("user/sign_up", async (payload) => {
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
  });