import { useContext } from 'react';
import { mainContext } from '../context';
const LoginForm = () => {
    const { currentForm, setCurrentForm } = useContext(mainContext);
    return (
        <>
            <form
                action=''
                className='flex flex-col space-y-4 absolute w-[19rem]'
            >
                <input
                    type='text'
                    placeholder='username'
                    class='p-2 border border-[#777] rounded-3xl'
                />
                <input
                    type='password'
                    placeholder='password'
                    class='p-2 border border-[#777] rounded-3xl'
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
