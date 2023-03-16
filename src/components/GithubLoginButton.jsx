import { useEffect, useContext } from 'react';
import { mainContext } from '../context';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    CLIENT_ID,
    getUserDataFromGithub,
    getAccessToken,
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
                        console.log(data);
                        setUser({
                            username: data.login,
                            email: data.email,
                        });
                        navigate('/main');
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
            <button onClick={loginWithGithub}>login with github</button>
        </>
    );
};

export default GithubLoginButton;
