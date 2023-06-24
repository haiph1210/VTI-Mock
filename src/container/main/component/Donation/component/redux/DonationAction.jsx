import { createDonate, findAllDonate } from "../../service/DonationService";

export const findAllDonationAction = () => {
    return async (dispatch) => {
        try {
            const res = await findAllDonate();
            if (res) {
                dispatch({
                    type: 'Donation/findAll',
                    payload: res,
                })
            }
        } catch (error) {
        }
    }
}

export const createDonateAction = (userId, donatePrice) => {
    return async (dispatch) => {
        try {
            const res = await createDonate(userId, donatePrice);
            if (res) {
                dispatch({
                    type: 'Donation/create',
                })
            }
        } catch (error) {
        } finally {
            dispatch(findAllDonationAction());
        }
    }
}