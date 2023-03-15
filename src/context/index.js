import { createContext } from 'react';

export const mainContext = createContext({
    currentForm: 'login',
    setCurrentForm: () => {},
});
