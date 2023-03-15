import { useContext } from 'react';
import { mainContext } from '../context';

const FormButtons = () => {
    const { currentForm, setCurrentForm } = useContext(mainContext);
    const changeForm = () => {
        currentForm === 'login'
            ? setCurrentForm('register')
            : setCurrentForm('login');
    };
    return (
        <>
            <div
                className='flex  my-9 items-center justify-center rounded-3xl shadow-lg shadow-[#ff4d4d4d]'
                onClick={changeForm}
            >
                <div id='btn'></div>
                <button className='bg-transparent border-none py-2 px-9 cursor-pointer outline-none relative duration-300'>
                    login
                </button>
                <button className='bg-transparent border-none py-2 px-9 cursor-pointer outline-none relative duration-300'>
                    register
                </button>
            </div>
        </>
    );
};

export default FormButtons;
