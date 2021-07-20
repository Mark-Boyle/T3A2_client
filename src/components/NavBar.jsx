import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {AuthContext} from "../contexts/AuthProvider"

export default function NavBar() {

    const [auth, setAuth] = useContext(AuthContext);

    const signOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setAuth({
            loggedIn: false,
            username: null
        })
    }
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            {auth.loggedIn ? (
                    <>
                        <h2>Logged in as: {auth.username}</h2>
                        <div onClick={signOut}>Sign Out</div>
                        <NavLink to='/addbook'>Add Book</NavLink>
                        <NavLink to='/history'>History</NavLink>
                        <NavLink to='/wishlist'>Wishlist</NavLink>

                    </>
                ) : (
                    <>
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/sign-up'>Sign Up</NavLink>
                    </>
            )}
        </nav>
    );
}
