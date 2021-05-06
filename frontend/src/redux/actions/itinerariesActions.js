import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

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
            // return await axios.put('http://localhost:4000/api/itineraries/comments/'+id, comment)
            const response = await axios.put('http://localhost:4000/api/itineraries/comments/'+id,{comment}, {
                headers: {
                    'Authorization' : 'Bearer '+user.token
                }
            })
            if(!response.success){
                return response.data.respuesta
            }
            // return response.data.respuesta
            dispatch({type: 'COMMENTS', payload: response.data.respuesta})
            .catch(error => console.log(error))
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
                return response.data.respuesta
            }catch(error){
                console.log(error)
          }
      }
    },
    //   deslike: (user, id) => {
    //     return async (dispatch, getState) => {
    //         const response = await axios.put('http://localhost:4000/api/itineraries/deslike/'+id,{id},{
    //             headers: {
    //                 'Authorization': 'Bearer '+user.token
    //             }
    //         })
    //         if(!response.success){
    //             return response.data.respuesta
    //         }
    //         dispatch({type: 'LIKES', payload: response.data.respuesta})
    //         .catch(error => console.log(error))
    //     }
    //   },


    
// sendComment: (comment, token, id, commentObj) =>{
//     return async (dispatch, getState) =>{
//       try{
//         const response = await axios.post('https://juncos-mytinerary.herokuapp.com/api/comments/', {comment, commentObj, id},{
//           headers:{
//             Authorization: 'Bearer ' + token
//           }
//         })
                
//         dispatch({
//           type: "COMMENTS",
//           payload: response.data
          
//         })
//         return false
//     }catch(error){
//       toast.error("Oops! Something went wrong")
//       console.log(error)
//       }
//     }
//   },
//   deleteComment: (token, commentId, IdItinerary) =>{
//     return async (dispatch, getState) =>{
//       try{
//         const response = await axios.put('https://juncos-mytinerary.herokuapp.com/api/comments', { token, commentId, IdItinerary},{
//           headers: {
//             Authorization: 'Bearer ' + token
//           }
//         })
//         dispatch({
//           type: "COMMENTS",
//          payload: response.data
          
//         })
//       }catch(error){
//         console.log(error)
//         toast.error("Oops! Something went wrong")

//       }
//     }
//   },
//   updateComment : (token, updatedComment, commentId, IdItinerary) =>{
//     return async (dispatch, getState) =>{
//       try{
//         const response = await axios.post('https://juncos-mytinerary.herokuapp.com/api/commentupdate', { token, updatedComment, commentId, IdItinerary},{
//           headers: {
//             Authorization: 'Bearer ' + token
//           }
//           })
//           dispatch({
//             type: "COMMENTS",
//             payload: response.data
//           })
          
//       }catch(error){
//         console.log(error)
//         toast.error("Oops! Something went wrong")

//       }
//     }
//   },
//   like: (token, itinerayId) =>{
//     return async (dispatch, getState) =>{
//       try{
//         const response = await axios.post('https://juncos-mytinerary.herokuapp.com/api/like', {token, itinerayId},
//         {
//           headers:{
//             Authorization: 'Bearer ' + token
//           }
//         })
//         dispatch({
//           type: "LIKES",
//           payload: response.data
//         })
        
//       }catch(err){
//         console.log(err)
//         toast.error("Oops! Something went wrong")

//       }
//     }
//   },
//   dislike: (token, itinerayId) =>{
//     return async (dispatch, getState) =>{
//       try{
//         const response = await axios.post('https://juncos-mytinerary.herokuapp.com/api/dislike', {token, itinerayId},
//         {
//           headers:{
//             Authorization: 'Bearer ' + token
//           }
//         })
//         dispatch({
//           type: "LIKES",
//           payload: response.data
//         })
//       }catch(err){
//         console.log(err)
//         toast.error("Oops! Something went wrong")

//       }
//     }
//   }
}



export default itinerariesActions