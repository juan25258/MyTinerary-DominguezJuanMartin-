import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itineraries: [],
};

const itinerariesSlice = createSlice({
  name: 'itineraries',
  initialState,
  reducers: {
    setItineraries: (state, action) => {
      state.itineraries = action.payload;
    },
  },
});

export const { setItineraries } = itinerariesSlice.actions;
export const itinerariesSelector = (state) => state.itineraries.itineraries;

export default itinerariesSlice.reducer;
