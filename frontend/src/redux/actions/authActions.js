import axios from 'axios'

const authActions = {
    createUser: (user) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/user/signup', user)
            console.log(response)
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
                payload: response.data.success ? response.data.respuesta : null
            })
        }
    },
    logOutUser: () => {
        return(dispatch, getState) => {
            dispatch({type: 'LOGOUT_USER'})
        }
    },
    logInForced: (user) => {
        
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.get('http://localhost:4000/api/user/loginForced', {
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                console.log(user)
                dispatch({type: 'LOG_USER', payload: {
                    ...respuesta.data.respuesta,
                    token: user.token
                }})
            } catch(err) {
                if (err.response.status === 401) {
                    alert("Me parece que me estás queriendo cagar con un token falso...")
                }
            }
            
        }
    }
        
}

export default authActions