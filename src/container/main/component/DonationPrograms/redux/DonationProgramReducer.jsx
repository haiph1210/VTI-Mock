import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const DonationProgramSlice = createSlice({
    name: 'donationPrograms',
    initState: {
        id: '',
        name: '',
        totalNumberOfDonation: '',
        createdDate: '',
        unitName: '',
        totalPages: '',
    },
    reducers: {
        findAllDP: (state,action) => {
            state.push(action.payload);    
        },
        createDP: (state,action) => {

        },
        updateDP: (state,action) => {

        }
    }

})



