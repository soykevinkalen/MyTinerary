import axios from 'axios'

const itinerariesActions = {
    getItinerariesByCity: (id) => {
        console.log(id)
        return (dispatch, getState) =>{
            axios.get('http://localhost:4000/api/itinerariesByCity/'+id)
            .then(response => {
                console.log(response)
                dispatch({type: 'GET_ITINERARIES_BY_CITY',
            payload: response.data.respuesta})})
            .catch( error => console.log(error))
        }
    }
}

export default itinerariesActions