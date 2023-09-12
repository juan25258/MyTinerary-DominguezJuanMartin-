import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";
import selectedCityReducer from "../store/reducers/selectedCity";
import itinerariesReducer from "./reducers/itineraries";

export const store = configureStore({
    reducer:{
        cities: citiesReducer,
        selectedCity: selectedCityReducer,
        itineraries: itinerariesReducer,
    },
    devTools: true, //habilita las opciones de desarrollador en redux dev tools
})