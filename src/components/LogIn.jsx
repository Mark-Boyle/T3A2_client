import React, { useState } from 'react';

export default function LogIn({history}){

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
            const response = await fetch('http://localhost:3000/login', {      //Sending a POST request to the login method of the User controller in the Rails API.
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
                    console.log("Success!!!")
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
        <div>
            Log In Page
            {errorMessage && (<h5>{errorMessage}</h5>)} 
            <form onSubmit={onSubmit}>
                <input type="text" name="username" id='username' placeholder="username" value ={loginForm.username} onChange={changeInput} />
                <input type="password" name="password" placeholder="password" value ={loginForm.password} onChange={changeInput} />
                <input type="submit"/>
            </form>
        </div>
    )
}