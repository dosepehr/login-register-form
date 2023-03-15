import { useContext } from 'react';
import { mainContext } from '../context';

const FormButtons = () => {
    const { currentForm, setCurrentForm } = useContext(mainContext);
    return (
        <>
            <div class='flex  my-9 items-center justify-center rounded-3xl shadow-lg shadow-[#ff4d4d4d]'>
                <div id='btn'></div>
                <button class='bg-transparent border-none py-2 px-9 cursor-pointer outline-none relative duration-300'>
                    login
                </button>
                <button class='bg-transparent border-none py-2 px-9 cursor-pointer outline-none relative duration-300'>
                    register
                </button>
            </div>
        </>
    );
};

export default FormButtons;
