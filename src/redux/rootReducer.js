import { combineReducers } from "redux";

import BookingReducer from "./Booking/reducer";

const rootReducer= combineReducers({
    booking: BookingReducer

})
export default rootReducer

