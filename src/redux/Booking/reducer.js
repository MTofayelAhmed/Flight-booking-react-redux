import { ADD } from "./actionTypes";
const initialState = []


const nextStateToId = (state)=> {
    const newId = state.reduce((initialId, book)=> Math.max(book?.id, initialId ), -1 )

    return newId + 1
}



const BookingReducer = (state = initialState, action)=> {

    switch (action.type) {
        case ADD:
            return [
                ...state, 
                { id: nextStateToId(state), ...action.payload

                }
            ]
            
          
    
        default:
            return state
    }

}




export default BookingReducer

