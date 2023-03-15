import { MainForm } from './components';
import { useState } from 'react';
function App() {
    const [currentForm, setCurrentForm] = useState();
    return (
        <div className='app absolute bg-center bg-cover h-full w-full flex items-center justify-center'>
            <MainForm
                currentForm={currentForm}
                setCurrentForm={setCurrentForm}
            />
        </div>
    );
}

export default App;

