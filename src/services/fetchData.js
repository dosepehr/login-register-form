import axios from 'axios';

// ! github client Id
export const CLIENT_ID = 'e197d9e5999efbb20ba4';

const BASE_URL = 'http://localhost:9000';

export const getUsers = () => {
    const url = `${BASE_URL}/users`;
    return axios.get(url);
};
export const registerUser = (newUserData) => {
    const url = `${BASE_URL}/users`;
    return axios.post(url, newUserData);
};

export const getUserDataFromGithub = () => {
    return axios.get('http://localhost:4000/getUserData', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
};
