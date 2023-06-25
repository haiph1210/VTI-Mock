import { toast } from "react-toastify";
import { login, register } from "../../service/UserService"

export const loginAction = (username,password,navigateCallBack) => {
    return async(dispatch) => {
        try {
            const res = await login(username,password);
            if(res){
                dispatch({
                    type: 'Auth/login',
                    payload: res,
                });
                localStorage.setItem('token',res.token)
                toast.success('Login Success');
                navigateCallBack();
            }
        } catch (error) {
        }
    }
}

export const logoutAction = (navigateCallBack) => {
    return async(dispatch) => {
        try {
                dispatch({
                    type: 'Auth/logout',
                });
                localStorage.removeItem('token')
                toast.success('Logout Success');
                navigateCallBack();
        } catch (error) {
        }
    }
}


export const registerAction = (userName,email,password,firstName,lastName) => {
    return async(dispatch) => {
        try {
            const res = await register(userName,email,password,firstName,lastName);
            if(res&&res.data){
                dispatch({
                    type: 'Auth/register',
                });
                toast.success('Register Success');
                   // config navigate login
            }
        } catch (error) {
        }
    }
}