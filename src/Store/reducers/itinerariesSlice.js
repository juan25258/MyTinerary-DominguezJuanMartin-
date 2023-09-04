import { createSlice } from "@reduxjs/toolkit";

const itinerariesSlice = createSlice({
  name: "itineraries",
  initialState: [],
  reducers: {
    setItineraries: (state, action) => {
      return action.payload;
    },
  },
});

export const { setItineraries } = itinerariesSlice.actions;

export default itinerariesSlice.reducer;