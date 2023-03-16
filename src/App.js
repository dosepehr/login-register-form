import { useState, useEffect } from 'react';
import { MainForm } from './components';
import { mainContext } from './context';
import { getUsers } from './services/fetchData';
function App() {
    const [currentForm, setCurrentForm] = useState('login');
    const [users, setUsers] = useState([]);
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
            }}
        >
            <div className='app absolute bg-center bg-cover h-full w-full flex items-center justify-center'>
                <MainForm
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                />
            </div>
        </mainContext.Provider>
    );
}

export default App;
