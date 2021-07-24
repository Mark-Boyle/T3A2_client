import React, {useContext, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {AuthContext} from "../contexts/AuthProvider";
import { Card } from 'react-bootstrap';
import '../styles/Card.css';

export default function Home(){
    const [auth, setAuth] = useContext(AuthContext);
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await fetch(process.env.REACT_APP_API_URL + "/books", {
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
                <h2 className="sub-title">Welcome {auth.username}</h2>
            </div>
            ) : <h1 className="sub-title">Not Logged In</h1>}
            <section>
            <div className="card-container">
                {books.map(book =>
                <Link style={{textDecoration: "none"}} to={`/books/${book.id}`}>
                <Card className='card' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={book.image} className="card-image"/>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    Author: {book.author}
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Link>
                )}
            
            </div>
            </section>
        </div>
    )
}