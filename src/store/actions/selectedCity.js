import { createAction } from "@reduxjs/toolkit";

const setSelectedCity = createAction('set_selected_city', (city) => {
  return {
    payload: city
  }
});

const clearSelectedCity = createAction('clear_selected_city');

const selectedCityActions = { setSelectedCity, clearSelectedCity };

export default selectedCityActions;
