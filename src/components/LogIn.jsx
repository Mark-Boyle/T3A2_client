import React, { useState, useContext } from 'react';
import {AuthContext} from "../contexts/AuthProvider";
import {Form, Button} from 'react-bootstrap';

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
                localStorage.setItem('username', data.username)
                    console.log("Success!!!")
                setAuth({
                    ...auth,
                    username: data.username,
                    email: data.email,
                    loggedIn: true
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
        <div>
            Log In Page
            {errorMessage && (<h5>{errorMessage}</h5>)} 
            <form onSubmit={onSubmit}>
                <input type="text" name="username" id='username' placeholder="username" value ={loginForm.username} onChange={changeInput} />
                <input type="password" name="password" placeholder="password" value ={loginForm.password} onChange={changeInput} />
                <input type="submit"/>
            </form>
        </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </>
    )
}