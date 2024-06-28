import axios from 'axios';

const API_URL = 'http://localhost:3000/api/deliveries';

export const getDeliveries = () => {
    return axios.get(API_URL);
};

export const addDelivery = (deliveryData) => {
    return axios.post(API_URL, deliveryData);
};
