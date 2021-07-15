import React, {useContext} from 'react';
import {AuthContext} from "../contexts/AuthProvider"


export default function Home(){
    const [auth, setAuth] = useContext(AuthContext);
    return(
        <div>
            {auth.loggedIn ? (
            <div>
                <h1>Logged In</h1>
                <h2>Welcome {auth.username}</h2>
            </div>
            ) : <h1>Not Logged In</h1>}
        </div>
    )
}