import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../styles/Card.css';


export default function Wishlist() {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await fetch(process.env.REACT_APP_API_URL + "/books/wishlist", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const data = await response.json()
        setBooks(data);
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <>
        <h1 className="sub-title">Wishlist</h1>
        <div className="col md={4}">
            <div className="card-container">{books.map(book =>       
            <Link style={{textDecoration: "none"}} to={`/books/${book.id}`}>
            <Card className="card" style={{ width: '18rem', backgroundColor: "#EC9C00"}}>
                  <Card.Img variant="top" src={book.image} className="card-image"/>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    Author: {book.author}
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Link>
            )}</div>    
                
        </div>
        </>
    )
}
