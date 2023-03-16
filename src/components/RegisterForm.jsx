import { useContext } from 'react';
import { mainContext } from '../context';
import { registerUser } from '../services/fetchData';
import { useNavigate } from 'react-router-dom';
const RegisterForm = () => {
    const navigate = useNavigate();
    const { currentForm, userInfo, setUserInfo, setUser } =
        useContext(mainContext);

    // ! getting new user info
    const setUserInfoHandler = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };
    const createUser = async (e) => {
        e.preventDefault();
        try {
            await registerUser(userInfo);
            setUser(userInfo);
            navigate('/main');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {/* if user requested for register form ,it will slide from right */}
            <form
                onSubmit={(e) => createUser(e)}
                action=''
                className={`flex flex-col space-y-4 absolute w-[19rem]
                duration-300
                ${currentForm === 'register' ? 'right-full' : 'right-9'}
                `}
            >
                <input
                    name='username'
                    onChange={setUserInfoHandler}
                    type='text'
                    placeholder='username'
                    className='p-2 border border-[#777] rounded-3xl'
                />
                <input
                    name='email'
                    onChange={setUserInfoHandler}
                    type='email'
                    placeholder='email'
                    className='p-2 border border-[#777] rounded-3xl'
                />
                <input
                    name='password'
                    onChange={setUserInfoHandler}
                    type='password'
                    placeholder='password'
                    className='p-2 border border-[#777] rounded-3xl'
                />
                <input
                    type='submit'
                    value='submit'
                    className='text-[#333] text-lg rounded-3xl p-2 bg-gradient-to-r from-[#f3446a] to-[#ff6464]'
                />
            </form>
        </>
    );
};

export default RegisterForm;
