import React from 'react'
import {combineReducers} from 'redux'
import DonationProgramsReducer from '../component/DonationPrograms/redux/DonationProgramReducer'
import DonationReducer from '../component/Donation/component/redux/DonationReducer'
import UserReducer from '../component/user/redux/UserReducer'
const RootReducer = combineReducers({
    donationProgram : DonationProgramsReducer,
    donate : DonationReducer,
    user: UserReducer,
})


export default RootReducer
