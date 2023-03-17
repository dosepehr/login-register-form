import { MainForm, MainPage } from '../pages';
export const routes = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/login-register',
        element: <MainForm />,
    },
];
