import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {deleteRequest} from '../utils/apiRequest';
import { Card, Button } from 'react-bootstrap';
import '../styles/Card.css';

export default function History() {
    const [books, setBooks] = useState([])
    const [update, setUpdate] = useState(false);

    const fetchBooks = async () =>{
        console.log("Conducting fetchBooks")
        const response = await fetch('http://localhost:3000/books/history', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log("Waiting for response")
        const data = await response.json()
        setBooks(data);
        console.log(data)
    }


    const deleteBook = (bookId) =>{
        deleteRequest(`http://localhost:3000/books/${bookId}`)
        console.log("After Delete!")
        setUpdate(!update)
        console.log("after update")
    }

    
    useEffect(() => {
        fetchBooks()
    }, [update])

  

    return (
        <div className="card-container">
            <ul>{books.map(book => <li key={book.id}>      
            <Link to={`/books/${book.id}`}>
            <Card className="card" style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="../../public/defaultImage.jpg" /> */}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    Author: {book.author}
                    </Card.Text>
                    <Button className="card-button" onClick={() => deleteBook(book.id)}>Delete</Button>
                  </Card.Body>
                </Card>
                </Link>
            </li>)}</ul>         
        </div>
    )
}


//Add logic to only received books with a status of read