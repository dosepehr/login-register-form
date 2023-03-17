import {
    LoginForm,
    RegisterForm,
    FormButtons,
    GithubLoginButton,
} from '../components';

const ManForm = () => {
    return (
        <div className='app absolute bg-center bg-cover h-full w-full flex items-center justify-center'>
            <div className='w-96 h-96 bg-white rounded-md border px-10 overflow-x-hidden relative'>
                <FormButtons />
                <GithubLoginButton />
                <LoginForm />
                <RegisterForm />
            </div>
        </div>
    );
};

export default ManForm;
