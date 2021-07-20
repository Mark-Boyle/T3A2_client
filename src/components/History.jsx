import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {deleteRequest} from '../utils/apiRequest';

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
        <div>
            <ul>{books.map(book => <li key={book.id}><Link to={`/books/${book.id}`}>{book.title}</Link>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
            <button>Give Review</button>
            </li>)}</ul>         
        </div>
    )
}


//Add logic to only received books with a status of read