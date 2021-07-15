import React, { useState } from 'react';

export default function SignUp(){

    const [signUpForm, setSignUpForm] = useState({
        user:{
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    })

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
        console.log(data)
    }

    const signUpUser = (event) =>{
        event.preventDefault()
        postSignUp()
    }

    const {username, email, password, password_confirmation} = signUpForm

    return(
        <form onSubmit={signUpUser}>
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
    ) 
}