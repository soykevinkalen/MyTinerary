const initialState =  {
    userLogged: null
}

const authReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch(action.type) {
        case 'LOG_USER':
            localStorage.setItem('userLogged', JSON.stringify({firstName: action.payload.firstName, userImage: action.payload.userName}))
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                userLogged: action.payload
            }
        case 'LOGOUT_USER':
            localStorage.clear()
            return {
                ...state,
                userLogged: null
            }
        default:
            return state
    }
}

export default authReducer