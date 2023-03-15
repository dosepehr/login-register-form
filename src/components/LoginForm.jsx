import { useContext } from 'react';
import { mainContext } from '../context';
const LoginForm = () => {
    const { currentForm } = useContext(mainContext);

    return (
        <>
            {/* if user requested for login form ,it will slide from left */}
            <form
                action=''
                className={`flex flex-col space-y-4 absolute w-[19rem]
                duration-300
                ${currentForm === 'login' ? 'left-full' : 'left-9'}
                `}
            >
                <input
                    type='text'
                    placeholder='username'
                    className='p-2 border border-[#777] rounded-3xl'
                />
                <input
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

export default LoginForm;
