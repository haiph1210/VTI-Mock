import { configureStore } from "@reduxjs/toolkit";
import { DonationProgramSlice } from "../component/DonationPrograms/redux/DonationProgramReducer";

const Store = configureStore({
    reducer : {
        donationPrograms: DonationProgramSlice,

    }
})
export default Store;