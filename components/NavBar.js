import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                {user ? (
                    <>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link href="/profile/orders">Order History</Link>
                        </li>
                        <li>
                            <Link href="/profile/edit">Edit Profile</Link>
                        </li>
                        <li>
                            <button onClick={logout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
