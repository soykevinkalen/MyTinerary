import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify'

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
    },
    putComments: (user,id, comment) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.put('http://localhost:4000/api/itineraries/comments/'+id,{comment}, {
                    headers: {
                        'Authorization' : 'Bearer '+user.token
                    }
                })
                dispatch({type: 'COMMENTS', payload: response.data.respuesta})
                return response.data.respuesta
            }catch(error){
                console.log(error)
            }
        }
    },
    likes: (user, itinerary) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.put('http://localhost:4000/api/itineraries/like/'+itinerary._id,{itinerary},{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                
                dispatch({type: 'LIKES', payload: response.data.respuesta})
                return response.data
            }catch(error){
                console.log(error)
          }
      }
    },
    deleteComment: (user, comment,itinerary) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.put('http://localhost:4000/api/comments/',{comment,itinerary}, {
                    headers: {
                        'Authorization' : 'Bearer '+user.token
                    }
                })
                dispatch({type: 'COMMENTS', payload: response.data.respuesta})
                return response.data.respuesta
            }catch(error){
                console.log(error)
            }
        }
    },
    updateComment: (user, comment,itinerary) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.put('http://localhost:4000/api/commentsUpdate/',{comment,itinerary}, {
                    headers: {
                        'Authorization' : 'Bearer '+user.token
                    }
                })
                dispatch({type: 'COMMENTS', payload: response.data.respuesta})
                return response.data.respuesta
            }catch(error){
                console.log(error)
            }
        }
    }
}

export default itinerariesActions