import { MainForm } from './components';
import { useState } from 'react';
import { mainContext } from './context';
function App() {
    // ! checks which form is requested by the user,login or register
    const [currentForm, setCurrentForm] = useState('login');
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
