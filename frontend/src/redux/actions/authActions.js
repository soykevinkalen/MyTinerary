import axios from 'axios'

const authActions = {
    createUser: (user) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/user/signup', user)
            dispatch({
                type: 'LOG_USER',
                payload: response.data.success ? response.data.respuesta : null
            })
        }
    },
    logInUser: (user) => {
        return async(dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/user/signin', user)
            console.log(response)
            dispatch({
                type:'LOG_USER',
                payload: response.data.success ? response.data.respuesta : null})
        }
    },
    logOutUser: () => {
        return(dispatch, getState) => {
            dispatch({type: 'LOGOUT_USER'})
        }
    },
    logInForced: (user) => {
        return(dispatch, getState) => {
            dispatch({type: 'LOG_USER', payload: user})

            // dispatch({type: 'LOG_USER', payload: user})
        }
    }
}

export default authActions