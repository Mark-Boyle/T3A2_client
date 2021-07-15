import React, {useContext} from 'react';
import {AuthContext} from "../contexts/AuthProvider";
import {Redirect} from 'react-router-dom';

export default function ProtectedRoute({ component: Comp }) {
    const [auth] = useContext(AuthContext)

    if(auth.loggedIn){
        return(
            <Comp />
        )
    }

    return (
        <Redirect to='/login' />
    )
}
