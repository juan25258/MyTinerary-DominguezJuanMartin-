import { createAction } from "@reduxjs/toolkit";

const itineraries = createAction('add_itineraries', (objetos) => {
    return {
        payload: objetos
    }
})

const filter_itineraries_by_city_Id = createAsyncThunk('filter_itineraries_by_city_id', async(query)=> {
  try{
   const itinerary = await axios.get("http://localhost:5000/api/itineraries?id="+ query.id)  
.then((itineraries)=>{
  console.log(itineraries.data);
  return itinerariesFound.data
})
return {
  itinerary : itinerary
}
}catch(e){
  console.log(e.message);
}
})

export default {
    itineraries,
    filter_itineraries_by_city_Id,
}