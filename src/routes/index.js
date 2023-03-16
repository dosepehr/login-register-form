import { Navigate } from 'react-router-dom';
import { MainForm } from '../pages';
export const routes = [
    {
        path: '/',
        element: <Navigate to='/login-register' />,
    },
    {
        path: '/login-register',
        element: <MainForm />,
    },

];
