import axios from 'axios'

const activitiesActions = {
    getActivitiesByItinerary: (id) => {
        return async (dispatch, getState) =>{
            const response = await axios.get('http://localhost:4000/api/activitiesByItinerary/'+id)
            return response
        }
    }
}

export default activitiesActions