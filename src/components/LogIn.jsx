import React, { useState } from 'react';

export default function LogIn(){

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const changeInput = (event) => {
        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
    }

    return(
        <div>
            Log In Page
            <form onSubmit={onSubmit}>
                <input type="text" name="username" id='username' placeholder="username" value ={loginForm.username} onChange={changeInput} />
                <input type="password" name="password" placeholder="password" value ={loginForm.password} onChange={changeInput} />
                <input type="submit"/>
            </form>
        </div>
    )
}