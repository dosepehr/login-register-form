import { useContext, useEffect } from 'react';
import { mainContext } from '../context';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
    const navigate = useNavigate();
    const { user, setUser, users } = useContext(mainContext);
    useEffect(() => {
        if (localStorage.getItem('userId')) {
            const loggedInUser = users.filter(
                (user) => user.id === +localStorage.getItem('userId')
            );
            loggedInUser.length > 0 && setUser(loggedInUser[0]);
        } else {
            navigate('/login-register');
        }
    });
    const logOutHandler = () => {
        setUser({});
        localStorage.removeItem('userId');
        localStorage.removeItem('accessToken');
    };
    return (
        <div>
            {Object.keys(user).length > 0 && (
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
            )}
        </div>
    );
};

export default MainPage;
