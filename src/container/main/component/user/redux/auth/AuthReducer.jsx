const initState = {
    tokenResponse: {}
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Auth/login':
            return {
                ...state,
                tokenResponse: action.payload
            }

        default:
            return state;
    }

}

export default AuthReducer
