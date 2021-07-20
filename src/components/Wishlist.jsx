import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


export default function Wishlist() {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        console.log("Conducting fetchBooks")
        const response = await fetch('http://localhost:3000/books/wishlist', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log("Waiting for response")
        const data = await response.json()
        setBooks(data);
        console.log(data)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <div>
            <ul>{books.map(book => <li key={book.id}><Link to={`/books/${book.id}`}>{book.title}</Link></li>)}</ul>         
        </div>
    )
}
