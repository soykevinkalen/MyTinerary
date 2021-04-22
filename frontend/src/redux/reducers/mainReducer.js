import { combineReducers } from "redux";
import onlyReducer from './onlyReducer'

const mainReducer = combineReducers({
    only: onlyReducer
})

export default mainReducer