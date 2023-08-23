import axios from 'axios';

// ! github client Id
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// ! json-server url
const BASE_URL = 'https://login-register-server.iran.liara.run';
// ! github server url
const GITHUB_SERVER_URL = 'http://localhost:4000';

// ! @desc get users list from server
// ! @route https://login-register-server.iran.liara.run/users
export const getUsers = () => {
    const url = `${BASE_URL}/users`;
    return axios.get(url);
};

// ! @desc post new user data to server
// ! @route https://login-register-server.iran.liara.run/users
export const registerUser = (newUserData) => {
    const url = `${BASE_URL}/users`;
    return axios.post(url, newUserData);
};

// ! @desc get user AccesToken from github server
// ! @route http://localhost:4000
export const getAccessToken = (codeParam) => {
    const url = `${GITHUB_SERVER_URL}/getAccessToken?code=${codeParam}`;
    return axios.get(url);
};

// ! @desc get user data from github server
// ! @route http://localhost:4000
export const getUserDataFromGithub = () => {
    const url = `${GITHUB_SERVER_URL}/getUserData`;
    return axios.get(url, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
};
