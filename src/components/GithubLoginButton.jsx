import { useEffect, useContext } from 'react';
import { mainContext } from '../context';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    CLIENT_ID,
    getUserDataFromGithub,
    getAccessToken,
    registerUser,
} from '../services/fetchData';
import { AiFillGithub } from 'react-icons/ai';
import { LoginToast } from './';

const GithubLoginButton = () => {
    const { setUser } = useContext(mainContext);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        // ! fetching codeParam from location
        const codeParam = location.search.slice(6);
        if (codeParam && localStorage.getItem('accessToken') === null) {
            const fetchAccessToken = async () => {
                // ! getting access code based on codeParam
                const { data: accessToken } = await getAccessToken(codeParam);
                if (accessToken.access_token) {
                    localStorage.setItem(
                        'accessToken',
                        accessToken.access_token
                    );
                    // ! getting user data from ginthub server
                    const { data, status } = await getUserDataFromGithub();
                    if (status === 200) {
                        // ! making new user information
                        const newUserData = {
                            username: data.login,
                            email: data.email,
                        };
                        setUser(newUserData);
                        // ! store user data in json-server
                        const { data: githubUser } = await registerUser(
                            newUserData
                        );
                        // ! navigating to main root
                        navigate('/');
                        localStorage.setItem('userId', githubUser.id);
                        LoginToast.fire({
                            icon: 'success',
                            title: 'Signed in successfully',
                        });
                    }
                }
            };
            fetchAccessToken();
        }
    }, []);
    // ! send request to authorizing from github
    const loginWithGithub = () => {
        window.location.assign(
            `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
        );
    };
    return (
        <>
            <button
                className='bg-black text-white text-center w-full mb-4 py-2 rounded-3xl flex items-center justify-center'
                onClick={loginWithGithub}
            >
                <span className='mr-2'>login with github</span>
                <AiFillGithub className='text-lg' />
            </button>
        </>
    );
};

export default GithubLoginButton;
