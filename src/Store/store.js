/* import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";

export const store = configureStore({
    reducer:{
        citiesReducer: citiesReducer
    }
})  */

import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";

const store = configureStore({
    reducer:{
        citiesReducer: citiesReducer
    }
});

export default store;
