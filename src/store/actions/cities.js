import { createAction } from "@reduxjs/toolkit";

const add_cities = createAction('add_cities', (objetos) => {
    return {
        payload: objetos
    }
})

const citiesActions = { add_cities }

export default citiesActions
   
