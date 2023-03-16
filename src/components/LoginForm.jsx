import { useContext } from 'react';
import { mainContext } from '../context';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const navigate = useNavigate();
    const { currentForm, userInfo, setUserInfo, users, setUser } =
        useContext(mainContext);
    // ! getting user info
    const setContactInfoHandler = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };
    const getUser = async (e) => {
        e.preventDefault();
        try {
            // ! getting requested user and check its username and password
            const requestedUser = users.filter(
                (user) =>
                    user.username.toLowerCase() ===
                    userInfo.username.toLowerCase()
            )[0];
            if (requestedUser) {
                if (requestedUser.password === userInfo.password) {
                    navigate('/main');
                    setUser(requestedUser);
                } else {
                    console.log('wrong pass or username');
                }
            } else {
                console.log('wrong pass or username');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {/* if user requested for login form ,it will slide from left */}
            <form
                onSubmit={(e) => getUser(e)}
                action=''
                className={`flex flex-col space-y-4 absolute w-[19rem]
                duration-300
                ${currentForm === 'login' ? 'left-full' : 'left-9'}
                `}
            >
                <input
                    onChange={setContactInfoHandler}
                    name='username'
                    type='text'
                    placeholder='username'
                    className='p-2 border border-[#777] rounded-3xl'
                />
                <input
                    onChange={setContactInfoHandler}
                    name='password'
                    type='password'
                    placeholder='password'
                    className='p-2 border border-[#777] rounded-3xl'
                />
                <input
                    type='submit'
                    value='Login'
                    className='text-[#333] text-lg rounded-3xl p-2 bg-gradient-to-r from-[#f3446a] to-[#ff6464]'
                />
            </form>
        </>
    );
};

export default LoginForm;
