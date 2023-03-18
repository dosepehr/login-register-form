import { createContext } from 'react';

export const mainContext = createContext({
    currentForm: 'login',
    setCurrentForm: () => {},
    users: [],
    setUsers: () => {},
    user: {},
    setUser: () => {},
    showPassword: false,
    setShowPassword: () => {},
});
