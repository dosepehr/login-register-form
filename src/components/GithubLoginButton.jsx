import { useEffect, useContext } from 'react';
import { mainContext } from '../context';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    CLIENT_ID,
    getUserDataFromGithub,
    getAccessToken,
    registerUser,
} from '../services/fetchData';

const GithubLoginButton = () => {
    const { setUser } = useContext(mainContext);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const codeParam = location.search.slice(6);
        if (codeParam && localStorage.getItem('accessToken') === null) {
            const fetchAccessToken = async () => {
                const { data: accessToken } = await getAccessToken(codeParam);
                if (accessToken.access_token) {
                    localStorage.setItem(
                        'accessToken',
                        accessToken.access_token
                    );
                    const { data, status } = await getUserDataFromGithub();
                    if (status === 200) {
                        const newUserData = {
                            username: data.login,
                            email: data.email,
                        };
                        setUser(newUserData);
                        const { data: githubUser } = await registerUser(
                            newUserData
                        );
                        navigate('/main');
                        localStorage.setItem('userId', githubUser.id);
                    }
                }
            };
            fetchAccessToken();
        }
    }, []);

    const loginWithGithub = () => {
        window.location.assign(
            `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
        );
    };
    return (
        <>
            <button className='bg-black text-white text-center w-full mb-4 py-2 rounded-3xl' onClick={loginWithGithub}>
                login with github
            </button>
        </>
    );
};

export default GithubLoginButton;
