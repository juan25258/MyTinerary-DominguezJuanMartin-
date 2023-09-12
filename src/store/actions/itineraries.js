import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItinerariesAsync = createAsyncThunk(
  'itineraries/fetchItineraries',
  async (cityId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/itineraries?cityId=${cityId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching itineraries:", error);
      throw error;
    }
  }
);
