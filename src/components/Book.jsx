import React, {useEffect, useState } from 'react'
import {fetchData} from '../utils/apiRequest';

export default function Book({match}) {
    
    console.log(match)

    const [book, setBook] = useState({});
    
    const fetchBook = async () => {
        const data = await fetchData(`http://localhost:3000/books/${match.params.id}`)
        
        setBook(data);
        
    }
    
    useEffect(() => {
        fetchBook();
    }, [])
    return (
        <div>
            <h3>{book.title}</h3>
            <p> Author: {book.author}</p>
            <p> Year: {book.year}</p>
            <p> Status: {book.status}</p>
            <h3>Review</h3>
        </div>
    )
}

