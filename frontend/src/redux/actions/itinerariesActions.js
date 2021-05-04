import axios from 'axios'

const itinerariesActions = {
    getItinerariesByCity: (id) => {
        return (dispatch, getState) =>{
            axios.get('http://localhost:4000/api/itinerariesByCity/'+id)
            .then(response => {
                dispatch({type: 'GET_ITINERARIES_BY_CITY',
            payload: response.data.respuesta})})
            .catch( error => console.log(error))
        }
    },
    putItinerary: (id, itinerary) => {
        return async (dispatch, getState) => {
            const response = await axios.put('http://localhost:4000/api/itineraries/'+id, itinerary)
            if(!response.success){
                return response.data.respuesta
            }
            dispatch({type: 'GET_ITINERARIES_BY_CITY', payload: response.data.respuesta})
            .catch(error => console.log(error))
        }
    }
}

export default itinerariesActions