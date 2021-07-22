import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {AuthContext} from "../contexts/AuthProvider";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
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
        {/* <nav>
            <NavLink to='/'>Home</NavLink>
            {auth.loggedIn ? (
                    <>
                        <h2>Logged in as: {auth.username}</h2>
                        <div onClick={signOut}>Sign Out</div>
                        <NavLink to='/addbook'>Add Book</NavLink>
                        <NavLink to='/history'>History</NavLink>
                        <NavLink to='/wishlist'>Wishlist</NavLink>

                    </>
                ) : (
                    <>
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/sign-up'>Sign Up</NavLink>
                    </>
            )}
        </nav> */}
        




        <Navbar expand='lg' bg="#8F3417" variant="light" className="navbar">
            <Container>
                <Navbar.Brand style={{color: "#EC9C00"}} href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "#EC9C00"}} className="custom-toggler"/>
            {auth.loggedIn ? (
                <>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{color: "#EC9C00"}} href="/history">History</Nav.Link>
                        <Nav.Link  style={{color: "#EC9C00"}} href="/wishlist">Wishlist</Nav.Link>
                        <Nav.Link style={{color: "#EC9C00"}} href="/addbook">Add Book</Nav.Link>
                        
                        <Nav.Link style={{color: "#EC9C00"}} >Logged in as: {auth.username}</Nav.Link>
                        <Nav.Link style={{color: "#EC9C00"}} onClick={signOut}>Sign Out</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
                </>
            ) : (
                <>
                    <Nav className="me-auto">
                        <Nav.Link href="/login">Log In</Nav.Link>
                        <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                    </Nav>
                </>
            )}

            </Container>
        </Navbar>




{/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
        </>
    );
}
