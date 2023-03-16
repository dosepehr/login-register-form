import { useContext } from 'react';
import { mainContext } from '../context';
const MainPage = () => {
    const { user } = useContext(mainContext);
    return (
        <div>
            <p>
                user : <span className='text-green-500 mx-2'>{user.username}</span>{' '}
                is logged in with email
                <span className='text-sky-500 mx-2'>{user.email}</span>
            </p>
        </div>
    );
};

export default MainPage;
