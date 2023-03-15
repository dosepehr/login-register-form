import { LoginForm } from './';

const ManForm = () => {
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
                <LoginForm />
            </div>
        </div>
    );
};

export default ManForm;
