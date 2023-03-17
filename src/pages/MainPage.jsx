import { useContext, useEffect } from 'react';
import { mainContext } from '../context';
import { useNavigate } from 'react-router-dom';
// ! sweet alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { toast } from '../components';
const MainPage = () => {
    const navigate = useNavigate();
    const { user, setUser, users } = useContext(mainContext);
    useEffect(() => {
        // ! check if userId is stored in local storage
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
        // ! user clicked on logout button --> fire alert
        MySwal.fire({
            title: 'Do you want to logout?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'yes',
            denyButtonText: `no`,
            icon: 'question',
        }).then((result) => {
            if (result.isConfirmed) {
                // ! logging out logic
                setUser({});
                localStorage.removeItem('userId');
                localStorage.removeItem('accessToken');
                // !user confirmed logging out --> fire toat
                toast.fire({
                    icon: 'warning',
                    title: 'you logged out',
                });
            } else if (result.isDenied) {
                // ! user denied logging out --> fire toast
                toast.fire({
                    icon: 'success',
                    title: 'its good to have you with us :))',
                });
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
