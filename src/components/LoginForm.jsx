import { useContext, useEffect } from 'react';
import { mainContext } from '../context';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginSchema } from '../validation/userSchema';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
// ! sweet alert toast
import { toast } from './';
const LoginForm = () => {
    const navigate = useNavigate();
    // ! get states from context
    const { currentForm, users, setUser, setShowPassword, showPassword } =
        useContext(mainContext);
    // ! redirecting user if its already logged in
    useEffect(() => {
        if (localStorage.getItem('userId')) {
            navigate('/');
        }
    });
    // ! getting user info
    const getUser = (values) => {
        try {
            // ! getting requested user and check its username and password
            const requestedUser = users.filter(
                (user) =>
                    user.username.toLowerCase() ===
                    values.username.toLowerCase()
            )[0];
            if (requestedUser) {
                if (requestedUser.password === values.password) {
                    // ! logged in successfully --> fire alert
                    toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully',
                    });
                    // ! store user id in localStorage
                    localStorage.setItem('userId', requestedUser.id);
                    // ! navigate user to main root
                    navigate('/');
                    // ! setUser data in user state
                    setUser(requestedUser);
                } else {
                    // ! user pass was wrong --> fire alert
                    toast.fire({
                        icon: 'error',
                        title: 'wrong pass or username',
                    });
                }
            } else {
                // ! username was wrong --> fire alert
                toast.fire({
                    icon: 'error',
                    title: 'wrong pass or username',
                });
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
            {/* if user requested for login form ,it will slide from left */}
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    getUser(values);
                }}
            >
                <Form
                    className={`flex flex-col space-y-2 absolute w-[19rem]
                duration-300
                ${currentForm === 'login' ? 'right-9' : 'right-full'}
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
                        Login
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default LoginForm;
