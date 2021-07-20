import React, {useEffect, useState } from 'react'
import {fetchData, updateRequest} from '../utils/apiRequest';
import EditableField from './EditableField'

export default function Book({match}) {
    console.log(match)
    const [book, setBook] = useState({});
    
    const fetchBook = async () => {
        const data = await fetchData(`http://localhost:3000/books/${match.params.id}`)
        
        setBook(data);
        
    }
    
    const updateData = (attributeName, newValue) => {
        console.log(newValue);
        const updateData = {
            book:{
                [attributeName]: newValue
            }
        }
        updateRequest(`http://localhost:3000/books/${book.id}`, updateData)
    }
 

    // useEffect(() => {
    //     fetchBook();
    // }, [fetchBook])

    useEffect(() => {
        fetchBook();
    }, [])

    // console.log(book.review.description)

    return (
        <div>
            <EditableField value={book.title} updateData={updateData} attribute='title' />
            <EditableField value={book.author} updateData={updateData} attribute='author'/>
            <EditableField value={book.year} updateData={updateData} attribute='year'/>
            <EditableField value={book.genre} updateData={updateData} attribute='genre'/>
            <h3>Review</h3>
             {/* <p> Description: {book.review.description}</p>
            <p> Rating:  {book.review.rating}</p>  */}
        </div>
    )
}

