import axios from 'axios';

const BASE_URL = 'http://localhost:9000';

export const getUsers = () => {
    const url = `${BASE_URL}/users`;
    return axios.get(url);
};
export const registerUser = (newUserData) => {
    const url = `${BASE_URL}/users`;
    axios.post(url, newUserData);
};
