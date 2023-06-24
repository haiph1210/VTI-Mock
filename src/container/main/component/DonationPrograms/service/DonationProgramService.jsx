import axios from '../../../../../enviroment/enviroment'

const findAllPageDP = (page) => {
    return axios.get(`donationPrograms?page=${page}`);
}

const createDP = (name,totalNumberOfDonation,unit) => {
    return axios.post(`donationPrograms`,{name,totalNumberOfDonation,unit});
}



export {findAllPageDP,createDP}