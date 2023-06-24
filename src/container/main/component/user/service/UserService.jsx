import axios from "../../../../../enviroment/enviroment.jsx"

const findAllUser = () => {
    return axios.get(`users/findAll`);
}
export {findAllUser}