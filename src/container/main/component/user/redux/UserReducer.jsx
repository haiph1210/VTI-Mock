const initState = {
    user: []
}

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case "user/findAll":
            break;
        default:
            return state;
    }
}

export default UserReducer;