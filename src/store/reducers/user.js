import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/user";

const initialState = {
  user: {
    email: "",
    _id: "",
  },
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userActions.sign_in.fulfilled, (state, action) => {
      state.user = action.payload.user;
    })
    .addCase(userActions.authenticate.fulfilled, (state, action) => {
      return { user: action.payload.user };
    })
    .addCase(userActions.sign_out.fulfilled, (state, action) => {
      return initialState
    })
    .addCase(userActions.sign_up.fulfilled, (state, action) => {
      state.user = action.payload;
    });
});

export default userReducer;
