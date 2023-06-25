const initState = {
    tokenResponse: {},
    isAuth: false
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Auth/login':
            return {
                ...state,
                tokenResponse: action.payload,
                isAuth: true
            }

            case 'Auth/logout':
                return {
                    ...state,
                    tokenResponse : {},
                    isAuth: false
                }
        default:
            return state;
    }

}

export default AuthReducer
