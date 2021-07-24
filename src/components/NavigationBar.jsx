import React, {useContext} from 'react';
// import { NavLink } from 'react-router-dom';
import {AuthContext} from "../contexts/AuthProvider";
import {Navbar, Container, Nav} from 'react-bootstrap';
import '../styles/App.css';
import '../styles/NavBar.css';

export default function NavigationBar() {

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
        <>
        <Navbar expand='lg' bg="#8F3417" variant="light" className="navbar">
            <Container>
                <Navbar.Brand style={{color: "#EC9C00", fontSize: "30px"}} href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "#EC9C00"}} className="custom-toggler"/>
            {auth.loggedIn ? (
                <>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{color: "#EC9C00"}} href="/history">History</Nav.Link>
                        <Nav.Link  style={{color: "#EC9C00"}} href="/wishlist">Wishlist</Nav.Link>
                        <Nav.Link style={{color: "#EC9C00"}} href="/addbook">Add Book</Nav.Link>
                        
                        <Nav.Link style={{color: "#EC9C00"}} >Logged in as: {auth.username}</Nav.Link>
                        <Nav.Link style={{color: "#EC9C00", textAlign: "end"}} onClick={signOut}>Sign Out</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
                </>
            ) : (
                <>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{color: "#EC9C00"}} href="/login">Log In</Nav.Link>
                            <Nav.Link style={{color: "#EC9C00"}} href="/sign-up">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </>
            )}
            </Container>
        </Navbar>
        </>
    );
}
