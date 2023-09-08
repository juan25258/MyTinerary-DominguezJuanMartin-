import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";

export const store = configureStore({
    reducer:{
        cities: citiesReducer
    },
    devTools: true, //habilita las opciones de desarrollador en redux dev tools
})