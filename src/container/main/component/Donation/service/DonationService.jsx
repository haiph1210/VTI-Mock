import axios from "../../../../../enviroment/enviroment.jsx"

const findAllDonate = () => {
    return axios.get(`/donations/findAll`);
}

const countDonation = () => {
    return axios.get(`/donations/count`)
}

const totalPriceDonation = () => {
    return axios.get(`/donations/totalPrices`)
}

export {findAllDonate,countDonation,totalPriceDonation}

