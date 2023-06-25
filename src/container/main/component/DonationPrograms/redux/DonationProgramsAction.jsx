import { createDP, deleteDp, findAllPageDP, updateDP } from "../service/DonationProgramService";

export const findAllDPAction = (page) => {
    return async (dispatch) => {
        try {
            const res = await findAllPageDP(page);
            if (res) {
                dispatch({
                    type: 'DP/findAll',
                    payload: res,
                })
            }
        } catch (error) {

        }
    }
}

export const createDPAction = (name,totalNumberOfDonation,unit) => {
    return async (dispatch) => {
        try {
            const res = await createDP(name,totalNumberOfDonation,unit);
            if (res) {
                dispatch({
                    type: 'DP/create',
                })
            }
        } catch (error) {

        }
    }
}

export const updateDPAction = (id,name,totalNumberOfDonation) => {
    return async (dispatch) => {
        try {
            const res = await updateDP(id,name,totalNumberOfDonation);
            if (res) {
                dispatch({
                    type: 'DP/update',
                })
            }
        } catch (error) {

        }
    }
}
export const deleteDPAction = (id) => {
    return async (dispatch) => {
        try {
            const res = await deleteDp(id);
            if (res) {
                dispatch({
                    type: 'DP/delete',
                })
            }
        } catch (error) {

        }
    }
}