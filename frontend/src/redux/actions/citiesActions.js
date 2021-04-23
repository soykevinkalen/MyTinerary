import axios from 'axios'

const citiesActions = {
    getCities: () => {
        return (dispatch, getState) =>{
            axios.get('http://localhost:4000/api/cities')
            .then(response => dispatch({type: 'GET_CITIES',
            payload: response.data.respuesta}))
            .catch( error => console.log(error))
        }
    },
    filterValue: (value) => {
        return (dispatch, getState) => {
            dispatch({type: 'FILTER_VALUE', payload: value})
        }

    }
}

export default citiesActions