import React, { useState, useContext } from 'react';
import {AuthContext} from '../contexts/AuthProvider';

export default function SignUp({history}){

    const [auth, setAuth] = useContext(AuthContext);

    const [signUpForm, setSignUpForm] = useState({
        user:{
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    })

    const [errorMessage, setErrorMessage] = useState('');

    const changeInput = (event) => {
        setSignUpForm({
            user:{
                ...signUpForm.user,
                [event.target.name]: event.target.value
            }
        })
    }

    const postSignUp = async () => {
        const response = await fetch('http://localhost:3000/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpForm)
        })

        const data = await response.json();
        if(data.token){
            localStorage.setItem('token', data.token)   //Storing the token received from the API in local storage.
            localStorage.setItem('username', data.username)
                console.log("Success!!!")
                setAuth({
                    ...auth,
                    username: data.username,
                    email: data.email,
                    loggedIn: true
                })
                history.push('/')
        }else{
            setErrorMessage(data)
        }
    }

    const signUpUser = (event) =>{
        event.preventDefault()
        postSignUp()
    }

    const {username, email, password, password_confirmation} = signUpForm

    return(
        <div className="form-container">
            {errorMessage && Object.keys(errorMessage).map((key) => <li key={key}>{key} {errorMessage[key][0]}</li>)}
            <form className="form" onSubmit={signUpUser}>
                <h2>Sign Up</h2>
                <label>Username</label>
                <input type="text" value= {username} onChange={changeInput} name='username'/>
                <label>Email</label>
                <input type="email" value= {email} onChange={changeInput} name='email'/>
                <label>Password</label>
                <input type="password" value= {password} onChange={changeInput} name='password'/>
                <label>Password Confirmation</label>
                <input type="password" value= {password_confirmation} onChange={changeInput} name='password_confirmation'/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    ) 
}