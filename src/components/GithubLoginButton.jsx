import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const GithubLoginButton = () => {
    const location = useLocation();
    useEffect(() => {
        const codeParam = location.search.slice(6);
        console.log(codeParam);
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
