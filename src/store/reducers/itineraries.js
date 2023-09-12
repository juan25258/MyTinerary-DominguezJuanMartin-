import { createReducer } from "@reduxjs/toolkit";
import { fetchItinerariesAsync } from "../actions/itineraries";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const itinerariesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchItinerariesAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchItinerariesAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      console.log("Itineraries loaded:", action.payload);
    })
    .addCase(fetchItinerariesAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
});

export default itinerariesReducer;
