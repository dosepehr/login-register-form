import { useContext } from 'react';
import { mainContext } from '../context';
const MainPage = () => {
    const { user, setUser } = useContext(mainContext);
    const logOutHandler = () => {
        setUser({});
    };
    return (
        <div>
            {Object.keys(user).length > 0 ? (
                <>
                    <p>
                        user :
                        <span className='text-green-500 mx-2'>
                            {user.username}
                        </span>
                        is logged in with email
                        <span className='text-sky-500 mx-2'>{user.email}</span>
                    </p>
                    <button
                        className='bg-pink-500 text-white p-2'
                        onClick={logOutHandler}
                    >
                        logOut
                    </button>
                </>
            ) : (
                <h1 className='bg-purple-500 text-center'>
                    you are logged out !
                </h1>
            )}
        </div>
    );
};

export default MainPage;