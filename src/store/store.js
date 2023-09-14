import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";
import selectedCityReducer from "../store/reducers/selectedCity";
import itinerariesReducer from "./reducers/itineraries";
import userReducer from "./reducers/user";

export const store = configureStore({
    reducer:{
        cities: citiesReducer,
        selectedCity: selectedCityReducer,
        itineraries: itinerariesReducer,
        userReducer: userReducer,
    },
    devTools: true, //habilita las opciones de desarrollador en redux dev tools
})