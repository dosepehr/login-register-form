import { useContext } from 'react';
import { mainContext } from '../context';

const FormButtons = () => {
    const { currentForm, setCurrentForm, setErrMessage } =
        useContext(mainContext);
    const changeForm = () => {
        currentForm === 'login'
            ? setCurrentForm('register')
            : setCurrentForm('login');
        setErrMessage('');
    };
    return (
        <>
            <div
                className='flex my-9 items-center justify-center rounded-3xl shadow-lg shadow-[#ff4d4d4d]'
                onClick={changeForm}
            >
                <div className='relative'>
                    <div
                        className={`bg-gradient-to-r from-[#f3446a] to-[#ff6464] h-full absolute rounded-full duration-300 w-40 top-0 
                        
                        ${
                            currentForm === 'login'
                                ? 'right-[110px]'
                                : '-right-10'
                        }
                        `}
                    ></div>
                    <button className='bg-transparent border-none py-2 px-9 cursor-pointer outline-none relative duration-300'>
                        register
                    </button>
                    <button className='bg-transparent border-none py-2 px-9 cursor-pointer outline-none relative duration-300'>
                        login
                    </button>
                </div>
            </div>
        </>
    );
};

export default FormButtons;
