/* import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";

export const store = configureStore({
    reducer:{
        citiesReducer: citiesReducer
    }
})  */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../Store/reducers/cities";
import itinerariesReducer from "./reducers/itineraries";


const rootReducer = combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer, // Agrega el reducer de itinerarios al root reducer
  });

const store = configureStore({
    reducer: rootReducer
});

export default store;
