import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
    username: Yup.string().required('username is required'),
    password: Yup.string()
        .required('password is required')
        .min(8, 'Password must be at least 8 characters long'),
    email: Yup.string()
        .email('email is not valid')
        .required('email is required'),
});
export const LoginSchema = Yup.object().shape({
    username: Yup.string().required('username is required'),
    password: Yup.string()
        .required('password is required')
        .min(8, 'Password must be at least 8 characters long'),
});
