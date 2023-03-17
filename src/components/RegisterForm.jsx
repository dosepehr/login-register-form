import { useContext, useEffect } from 'react';
import { mainContext } from '../context';
import { registerUser } from '../services/fetchData';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegisterSchema } from '../validation/userSchema';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
// ! sweet alert toast
import { toast } from './';
const RegisterForm = () => {
    const navigate = useNavigate();
    // ! get states from context
    const { currentForm, setUser, users, showPassword, setShowPassword } =
        useContext(mainContext);
    // ! redirecting user if its already logged in
    useEffect(() => {
        if (localStorage.getItem('userId')) {
            navigate('/');
        }
    });

    // ! getting new user info
    const createUser = async (values) => {
        try {
            const isUsernameTaken = users.some(
                (user) =>
                    user.username.toLowerCase() ===
                    values.username.toLowerCase()
            );
            const isEmailTaken = users.some(
                (user) =>
                    user.email.toLowerCase() === values.email.toLowerCase()
            );
            if (isUsernameTaken) {
                // ! user name was taken --> fire alert
                toast.fire({
                    icon: 'error',
                    title: 'this username is taken,please choose another name',
                });
            } else if (isEmailTaken) {
                // ! user email was taken --> fire alert
                toast.fire({
                    icon: 'error',
                    title: 'this email is connected to another account',
                });
            } else {
                // ! user registered successfully --> fire alert
                toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully',
                });
                // ! fetching user data from json-server
                const { data } = await registerUser(values);
                // ! setUser data in user state
                setUser(data);
                // ! store user id in localStorage
                localStorage.setItem('userId', data.id);
                // ! navigate user to main root
                navigate('/');
                // ! clear err messages
            }
        } catch (err) {
            console.log(err);
        }
    };
    // ! handle showing password or not
    const setSHowPasswordHandler = () => {
        setShowPassword((prev) => !prev);
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
                ${currentForm === 'register' ? 'left-9' : 'left-full'}
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
                    <div className='relative'>
                        <Field
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='password'
                            className='p-2 border border-[#777] rounded-3xl w-full'
                        />
                        <span
                            onClick={setSHowPasswordHandler}
                            className='absolute right-2 top-2 bottom-0 text-2xl cursor-pointer text-[#777]'
                        >
                            {showPassword ? (
                                <AiOutlineEye />
                            ) : (
                                <AiOutlineEyeInvisible />
                            )}
                        </span>
                    </div>
                    <span className='text-red-500'>
                        <ErrorMessage name='password' />
                    </span>
                    <button
                        type='submit'
                        className='text-white text-lg rounded-3xl p-2 bg-gradient-to-r from-[#f3446a] to-[#ff6464]'
                    >
                        Register
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default RegisterForm;
