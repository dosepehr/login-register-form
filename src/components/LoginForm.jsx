import { useContext, useEffect } from 'react';
import { mainContext } from '../context';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginSchema } from '../validation/userSchema';
const LoginForm = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('userId')) {
            navigate('/main');
        }
    }, []);
    const { currentForm, users, setUser, errMessage, setErrMessage } =
        useContext(mainContext);
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
                    localStorage.setItem('userId', requestedUser.id);
                    navigate('/main');
                    setUser(requestedUser);
                    setErrMessage('');
                } else {
                    setErrMessage('wrong pass or username');
                }
            } else {
                setErrMessage('wrong pass or username');
            }
        } catch (err) {
            console.log(err);
        }
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
                ${currentForm === 'login' ? 'left-full' : 'left-9'}
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
                        name='password'
                        type='password'
                        placeholder='password'
                        className='p-2 border border-[#777] rounded-3xl'
                    />
                    <span className='text-red-500'>
                        <ErrorMessage name='password' />
                    </span>
                    {errMessage && (
                        <span className='text-red-500'>{errMessage}</span>
                    )}
                    <button
                        type='submit'
                        className='text-[#333] text-lg rounded-3xl p-2 bg-gradient-to-r from-[#f3446a] to-[#ff6464]'
                    >
                        Login
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default LoginForm;
