import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cities: [],
  filter: "",
  status: "idle",
  error: null,
  selectedCity: null,
};

export const fetchCities = createAsyncThunk('cities/fetchCities', async (filter) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/cities?filter=${filter}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCities.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCities.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.cities = action.payload;
    })
    .addCase(fetchCities.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
});

export const { setCities, setFilter, setSelectedCity } = citiesSlice.actions;
export const selectedCitySelector = (state) => state.cities.selectedCity;
export default citiesSlice.reducer;
