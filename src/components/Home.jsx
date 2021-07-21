import React, {useContext, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {AuthContext} from "../contexts/AuthProvider";
import { Card, Button } from 'react-bootstrap';
import '../styles/Card.css';


export default function Home(){
    const [auth, setAuth] = useContext(AuthContext);
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await fetch('http://localhost:3000/books', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setBooks(data);
      };

      useEffect(() => {
        fetchBooks();
      }, []);
      

    return(
        <div>
            {auth.loggedIn ? (
            <div>
                {/* <h1>Logged In</h1> */}
                <h2>Welcome {auth.username}</h2>
            </div>
            ) : <h1>Not Logged In</h1>}
            <section>
            <div className="card-container">
                {books.map(book =>
                <Link style={{textDecoration: "none"}} to={`/books/${book.id}`}>
                <Card className='card' style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="../../public/defaultImage.jpg" /> */}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    Author: {book.author}
                    </Card.Text>
                    {/* <Button className='card-button'>Details</Button> */}
                  </Card.Body>
                </Card>
                </Link>
                )}
            
            </div>
            </section>
        </div>
    )
}