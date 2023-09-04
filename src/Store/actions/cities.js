import { createAction } from "@reduxjs/toolkit";

const add_cities = createAction('add_cities', (objetos) => {
    return {
        payload: objetos
    }
})

const filter_itineraries_by_city_Id = createAsyncThunk('filter_itineraries_by_city_id', async(query)=> {
  try{
   const itinerariesFound = await axios.get("http://localhost:5000/api/itineraries?id="+ query.id)  
.then((itinerariesFound)=>{
  console.log(itinerariesFound.data);
  return itinerariesFound.data
})
return {
  itinerariesFound : itinerariesFound
}
}catch(e){
  console.log(e.message);
}
})

export default {
    add_cities,
    filter_itineraries_by_city_Id
}