import React from 'react'
import {combineReducers} from 'redux'
import DonationProgramsReducer from '../component/DonationPrograms/redux/DonationProgramReducer'
import DonationReducer from '../component/Donation/component/redux/DonationReducer'
const RootReducer = combineReducers({
    donationProgram : DonationProgramsReducer,
    donate : DonationReducer,
})


export default RootReducer
