import { findAllPageDP } from "../service/DonationProgramService";

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