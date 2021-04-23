import { combineReducers } from "redux";
import onlyReducer from './onlyReducer'
import itinerariesReducer from './itinerariesReducer'


const mainReducer = combineReducers({
    only: onlyReducer,
    itinerary: itinerariesReducer
})

export default mainReducer