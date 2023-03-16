import { Navigate } from 'react-router-dom';
import { MainForm, MainPage } from '../pages';
export const routes = [
    {
        path: '/',
        element: <Navigate to='/main' />,
    },
    {
        path: '/login-register',
        element: <MainForm />,
    },
    {
        path: '/main',
        element: <MainPage />,
    },
];
