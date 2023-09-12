import { createReducer } from "@reduxjs/toolkit";
import selectedCityActions from "../actions/selectedCity";

const initialState = null;

const selectedCityReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(selectedCityActions.setSelectedCity, (state, action) => {
      return action.payload;
    })
    .addCase(selectedCityActions.clearSelectedCity, () => {
      return null;
    });
});

export default selectedCityReducer;
