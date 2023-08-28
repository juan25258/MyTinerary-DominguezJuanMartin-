import { createReducer } from "@reduxjs/toolkit";
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
    ]
}

const citiesReducer = createReducer(initialState, (builder)=>{
    return builder.addCase(citiesActions.add_cities, (state, action)=>{
        const newState = {...state, cities: action.payload.cities}
    })
})

export default citiesReducer