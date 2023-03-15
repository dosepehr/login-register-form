import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <div className='w-96 h-96 bg-white rounded-md border px-10'>
                <div class='flex  my-9 items-center justify-center rounded-3xl shadow-lg shadow-[#ff4d4d4d]'>
                    <div id='btn'></div>
                    <button class='bg-transparent border-none py-2 px-9 cursor-pointer outline-none relative duration-300'>
                        login
                    </button>
                    <button class='bg-transparent border-none py-2 px-9 cursor-pointer outline-none relative duration-300'>
                        register
                    </button>
                </div>
                {/* start form section */}
                <form action='' className='flex flex-col space-y-4'>
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
                    <input type='submit' value='submit'
                    className='text-[#333] text-lg rounded-3xl p-2 bg-gradient-to-r from-[#f3446a] to-[#ff6464]'

                    />
                </form>
                {/* end form section */}
            </div>
        </div>
    );
};

export default LoginForm;
