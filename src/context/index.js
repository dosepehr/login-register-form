import { createContext } from 'react';

export const mainContext = createContext({
    currentForm: 'login',
    setCurrentForm: () => {},
    userInfo: {},
    setUserInfo: () => {},
    users: [],
    setUsers: () => {},
    user: {},
    setUser: () => {},
    errMessage: '',
    setErrMessage: () => {},
});
