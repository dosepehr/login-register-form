import React from 'react';

const FormButtons = () => {
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
