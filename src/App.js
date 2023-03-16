import { useState, useEffect } from 'react';
import { MainForm } from './components';
import { mainContext } from './context';
import { getUsers } from './services/fetchData';
function App() {
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
                <MainForm
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                />
        </mainContext.Provider>
    );
}

export default App;
