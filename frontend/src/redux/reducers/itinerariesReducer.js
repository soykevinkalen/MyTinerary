const initialState = {
    itineraries: [],
    loading: true
}

const itinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITINERARIES_BY_CITY':
            return {
                ...state,
                itineraries: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default itinerariesReducer