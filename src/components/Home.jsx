import React, {useContext} from 'react';
import {AuthContext} from "../contexts/AuthProvider"


export default function Home(){
    const [auth, setAuth] = useContext(AuthContext);
    return(
        <div>
            {auth.loggedIn ? <h1>Logged In</h1> : <h1>Not Logged In</h1>}
        </div>
    )
}