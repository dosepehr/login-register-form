import { LoginForm, RegisterForm, FormButtons } from './';

const ManForm = ({ currentForm, setCurrentForm }) => {
    return (
        <div>
            <div className='w-96 h-96 bg-white rounded-md border px-10'>
                <FormButtons
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                />
                <LoginForm />
                <RegisterForm />
            </div>
        </div>
    );
};

export default ManForm;
