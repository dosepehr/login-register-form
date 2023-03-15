import { LoginForm, RegisterForm, FormButtons } from './';

const ManForm = () => {
    return (
        <div>
            <div className='w-96 h-96 bg-white rounded-md border px-10'>
                <FormButtons />
                <LoginForm />
                <RegisterForm />
            </div>
        </div>
    );
};

export default ManForm;
