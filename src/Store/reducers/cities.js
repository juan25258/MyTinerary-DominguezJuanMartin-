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

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
  filter: '',
  selectedCity: null,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    }
  },
});

export const { setCities, setFilter, setSelectedCity } = citiesSlice.actions;
export const selectedCitySelector = (state) => state.cities.selectedCity;
export default citiesSlice.reducer;