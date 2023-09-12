import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities"


const initialState = {
  cities:[],
  filter: '',
}


const citiesReducer = createReducer(initialState, (builder) => {
  return builder.addCase(citiesActions.add_cities, (state, action) => {
      const newState = {...state, cities: action.payload }
      return newState
  })
})

export default citiesReducer
