import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const GithubLoginButton = () => {
    const location = useLocation();
    useEffect(() => {
        const codeParam = location.search.slice(6);
        if (codeParam && localStorage.getItem('accessToken') === null) {
            const getAccessToken = async () => {
                const res = await fetch(
                    `http://localhost:4000/getAccessToken?code=${codeParam}`
                );
                const data = await res.json();
                console.log(data);
                if (data.access_token) {
                    localStorage.setItem('accessToken', data.access_token);
                }
            };
            getAccessToken();
        }
    }, []);
    const CLIENT_ID = 'e197d9e5999efbb20ba4';
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
