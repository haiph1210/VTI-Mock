const initState = {
    donation : []
}

const DonationReducer = (state = initState,action) => {
    switch(action.type) {
        case 'Donation/findAll':
            return{
                ...state,
                donation: action.payload
            } 

            default:
                return state;
    }
}
export default DonationReducer;