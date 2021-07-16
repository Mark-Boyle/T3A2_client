import React, {useEffect, useState} from 'react'

export default function History() {
    const [books, setBooks] = useState([])

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

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <div>
            <ul>{books.map(book => <li key={book.id}>{book.author}</li>)}</ul>         
        </div>
    )
}


//Add logic to only received books with a status of read