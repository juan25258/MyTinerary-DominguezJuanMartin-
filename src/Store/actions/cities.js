import { createAction } from "@reduxjs/toolkit";

const add_cities = createAction('add_cities', (objetos) => {
    return {
        payload: objetos
    }
})

export default {
    add_cities
}