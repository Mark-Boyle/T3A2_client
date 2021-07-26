import React, { useState, useContext } from 'react';
import {AuthContext} from "../contexts/AuthProvider";
import '../styles/Form.css';

export default function LogIn({history}){

    const [auth, setAuth] = useContext(AuthContext);

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState("")

    const changeInput = (event) => {
        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value
        })
    }

    const sendLoginRequest = async () => {
            const response = await fetch(process.env.REACT_APP_API_URL + "/login", {      //Sending a POST request to the login method of the User controller in the Rails API.
                method: 'POST',                                                  //The type of http request is POST.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginForm)         //Sending the data in loginForm to the API in JSON format.
            })
    
            const data = await response.json()              
            console.log(data)
            if(data.token){
                localStorage.setItem('token', data.token)   //Storing the token received from the API in local storage.
                localStorage.setItem('username', data.username)
                localStorage.setItem('userId', data.user_id)
                    console.log("Success!!!")
                setAuth({
                    ...auth,
                    username: data.username,
                    email: data.email,
                    loggedIn: true,
                    userId: data.user_id

                })
                    history.push('/')     //Redirecting to home page.

            }else{
                setErrorMessage(data.error)
            }
        }

    const onSubmit = (e) => {
        e.preventDefault();
        sendLoginRequest()
    }

    return(
            <>
        <div className="form-container">
            
            {errorMessage && (<h5 className="error-message">{errorMessage}</h5>)} 
            <form className="form" onSubmit={onSubmit}>
                <h2>Log In</h2>
                <label>Username: </label>
                <input type="text" name="username" id='username' placeholder="username" value ={loginForm.username} onChange={changeInput} />
                <label>Password: </label>
                <input type="password" name="password" id='password' placeholder="password" value ={loginForm.password} onChange={changeInput} />
                <input className="form-button" type="submit"/>
            </form>
        </div>
            </>
    )
}