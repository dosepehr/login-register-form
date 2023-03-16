import { useState, useEffect } from 'react';
import { mainContext } from './context';
import { getUsers } from './services/fetchData';
import { routes } from './routes';
import { useRoutes } from 'react-router-dom';
function App() {
    const router = useRoutes(routes);
    // * states
    const [currentForm, setCurrentForm] = useState('login');
    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    // ! getting users from server
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: usersData } = await getUsers();
                setUsers(usersData);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    // ! checks which form is requested by the user,login or register
    return (
        <mainContext.Provider
            value={{
                currentForm,
                setCurrentForm,
                userInfo,
                setUserInfo,
                setUsers,
                users,
            }}
        >
            {router}
        </mainContext.Provider>
    );
}

export default App;
