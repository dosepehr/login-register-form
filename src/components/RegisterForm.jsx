import { useContext } from 'react';
import { mainContext } from '../context';
import { registerUser } from '../services/fetchData';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegisterSchema } from '../validation/userSchema';
const RegisterForm = () => {
    const navigate = useNavigate();
    const { currentForm, setUser } = useContext(mainContext);

    // ! getting new user info
    const createUser = async (values) => {
        try {
            await registerUser(values);
            setUser(values);
            navigate('/main');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {/* if user requested for register form ,it will slide from right */}
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                }}
                validationSchema={RegisterSchema}
                onSubmit={(values) => {
                    createUser(values);
                }}
            >
                <Form
                    className={`flex flex-col space-y-2 absolute w-[19rem]
                duration-300
                ${currentForm === 'register' ? 'right-full' : 'right-9'}
                `}
                >
                    <Field
                        name='username'
                        type='text'
                        placeholder='username'
                        className='p-2 border border-[#777] rounded-3xl'
                    />
                    <span className='text-red-500'>
                        <ErrorMessage name='username' />
                    </span>
                    <Field
                        name='email'
                        type='text'
                        placeholder='email'
                        className='p-2 border border-[#777] rounded-3xl'
                    />
                    <span className='text-red-500'>
                        <ErrorMessage name='email' />
                    </span>
                    <Field
                        name='password'
                        type='password'
                        placeholder='password'
                        className='p-2 border border-[#777] rounded-3xl'
                    />
                    <span className='text-red-500'>
                        <ErrorMessage name='password' />
                    </span>
                    <button
                        type='submit'
                        className='text-[#333] text-lg rounded-3xl p-2 bg-gradient-to-r from-[#f3446a] to-[#ff6464]'
                    >
                        Register
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default RegisterForm;
