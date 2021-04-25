import { combineReducers } from "redux";
import cityReducer from './cityReducer'
import itinerariesReducer from './itinerariesReducer'

const mainReducer = combineReducers({
    city: cityReducer,
    itinerary: itinerariesReducer
})

export default mainReducer