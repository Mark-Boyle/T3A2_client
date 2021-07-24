import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {deleteRequest} from '../utils/apiRequest';
import { Card, Button } from 'react-bootstrap';
import '../styles/Card.css';

export default function History() {
    const [books, setBooks] = useState([])
    const [update, setUpdate] = useState(false);

    const fetchBooks = async () =>{
        const response = await fetch(process.env.REACT_APP_API_URL + "/books/history", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const data = await response.json()
        setBooks(data);
    }

    const deleteBook = (bookId) =>{
        deleteRequest(process.env.REACT_APP_API_URL + `/books/${bookId}`)
        setUpdate(!update)
    }
    
    useEffect(() => {
        fetchBooks()
    }, [update])

    return (
        <>
        <h1 className="sub-title">History</h1>
        <div className="card-container">
            {books.map(book =>     
            <Link style={{textDecoration: "none"}} to={`/books/${book.id}`}>
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={book.image} className="card-image"/>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    Author: {book.author}
                    </Card.Text>
                    <Button className="card-button" onClick={() => deleteBook(book.id)}>Delete</Button>
                  </Card.Body>
                </Card>
                </Link>
            )}       
        </div>
        </>
    )
}
