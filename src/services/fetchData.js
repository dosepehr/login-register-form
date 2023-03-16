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
    const url = 'http://localhost:4000/getUserData';
    return axios.get(url, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
};

export const getAccessToken = (codeParam) => {
    const url = `http://localhost:4000/getAccessToken?code=${codeParam}`;
    return axios.get(url);
};