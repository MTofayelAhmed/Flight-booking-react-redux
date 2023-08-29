import { ADD } from "./actionTypes"


const addBooking = (bookingData)=> {
    return {
        type: ADD,
        payload: bookingData
    }
  
}

export default addBooking;