/* import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities";
import cities from "../actions/cities";

const initialState = {
    cities:[
        {
            image: {
                type: String,
                require: false,
              },
              name: {
                type: String,
                require: true,
              },
              country: {
                type: String,
                require: true,
              },
              details: {
                type: String,
                
              },
              moreDetails: {
                type: String,
                
              },
        }
    ],
    filter: '',
}

const citiesReducer = createReducer(initialState, (builder)=>{
    return builder.addCase(citiesActions.add_cities, (state, action)=>{
        const newState = {...state, cities: action.payload.cities}
    })
})

export default citiesReducer */

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
