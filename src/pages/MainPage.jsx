import { useContext, useEffect } from 'react';
import { mainContext } from '../context';
import { useNavigate } from 'react-router-dom';
// ! sweet alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
        // ! showing sweet alert
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: 'Do you want to logout?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'yes',
            denyButtonText: `no`,
            icon:'question'
        }).then((result) => {
            if (result.isConfirmed) {
                setUser({});
                localStorage.removeItem('userId');
                localStorage.removeItem('accessToken');
                MySwal.fire('you logged out', '', 'warning');
            } else if (result.isDenied) {
                MySwal.fire('its good to have you with us :))', '', 'success');
            }
        });
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
