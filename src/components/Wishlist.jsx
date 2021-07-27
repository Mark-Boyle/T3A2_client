import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {deleteRequest} from '../utils/apiRequest';
import { Card, Button } from 'react-bootstrap';
import '../styles/Card.css';

export default function Wishlist() {
    const [books, setBooks] = useState([]);
    const [update, setUpdate] = useState(false);

    const fetchBooks = async () => {
        const response = await fetch(process.env.REACT_APP_API_URL + "/books/wishlist", {
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
            <h1 className="sub-title">Wishlist</h1>
            <div className="col md={4}">
                <div className="card-container">{books.map(book =>       
                <Card className="card" style={{ width: '18rem', backgroundColor: "#EC9C00"}}>
                    <Link className="card-link" to={`/books/${book.id}`}>
                    <Card.Img variant="top" src={book.image} className="card-image"/>
                    </Link>
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>
                        Author: {book.author}
                        </Card.Text>
                        <Button className="card-button" onClick={() => deleteBook(book.id)}>Delete</Button>
                    </Card.Body>
                    </Card>           
                )}</div>    
            </div>
        </>
    )
}
