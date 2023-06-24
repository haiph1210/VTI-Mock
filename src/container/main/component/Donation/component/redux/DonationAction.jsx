import { toast } from "react-toastify";
import { createDonate, deleteDonate, findAllDonate, updateDonate } from "../../service/DonationService";

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

export const createDonateAction = (userId, donatePrice,onHide) => {
    return async (dispatch) => {
        try {
            const res = await createDonate(userId, donatePrice);
            if (res) {
                dispatch({
                    type: 'Donation/create',
                })
                onHide();
                toast.success("Create New Donation Success");
            }else{
                toast.error("Create New Donation False");
            }
        } catch (error) {
        } finally {
            dispatch(findAllDonationAction());
        }
    }
}


export const updateDonateAction = (id,userId,donatePrice,onHide) => {
    return async (dispatch) => {
        try {
            console.log(id,userId,donatePrice);
            const res = await updateDonate(id,userId,donatePrice);
            if (res) {
                dispatch({
                    type: 'Donation/update',
                })
                onHide();
                toast.success("Create New Donation Success");
            }else{
                toast.error("Create New Donation False");
            }
        } catch (error) {
        } finally {
            dispatch(findAllDonationAction());
        }
    }
}

export const deleteDonateAction = (id,onHide) => {
    return async (dispatch) => {
        try {
        
            const res = await deleteDonate(id);
            if (res) {
                dispatch({
                    type: 'Donation/delete',
                })
                onHide();
                toast.success(`Delete with ${id} success`);
            }else{
                toast.error("Delete False");
            }
        } catch (error) {
        } finally {
            dispatch(findAllDonationAction());
        }
    }
}