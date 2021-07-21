import React, {useEffect, useState, useCallback } from 'react'
import {fetchData, updateRequest} from '../utils/apiRequest';
import EditableField from './EditableField'

export default function Book({match}) {
    console.log(match)
    const [book, setBook] = useState({});
    
    const fetchBook = async () => {
        const data = await fetchData(`http://localhost:3000/books/${match.params.id}`)
        console.log(data)
        setBook(data);
    
    };
    
    const updateData = (attributeName, newValue) => {
        console.log(newValue);
        const updateData = {
            book:{
                [attributeName]: newValue
            }
        }
        
        updateRequest(`http://localhost:3000/books/${book.id}`, updateData, fetchBook)
        // call on fetch book again to refetch the new data for the front end
        // fetchBook();
    }


    const updateReview = (attributeName, newValue) => {
        console.log(newValue);
        const updateData = {
            review:{
                [attributeName]: newValue
            }
        }
        
        updateRequest(`http://localhost:3000/reviews/${book.id}`, updateData, fetchBook)
        // call on fetch book again to refetch the new data for the front end
        // console.log("fetching book")
        // fetchBook();
        // console.log("fetched")
    }
 

    // useEffect(() => {
    //     fetchBook();
    // }, [fetchBook])

    useEffect(() => {
        fetchBook();
    }, [])



   

    // console.log(book.review)

    return (
        <div>
            <EditableField value={book.title} updateData={updateData} attribute='title' />
            <EditableField value={book.author} updateData={updateData} attribute='author'/>
            <EditableField value={book.year} updateData={updateData} attribute='year'/>
            <EditableField value={book.genre} updateData={updateData} attribute='genre'/>
            <EditableField value={book.status} updateData={updateData} attribute='status'/>
            <h1>Review</h1>
            {/* wrapped in short circuit logic */}
            
            {book.review && <div>
                 <EditableField value={book.review.description} updateData={updateReview} attribute='description'/>
                 <EditableField value={book.review.rating} updateData={updateReview} attribute='rating'/>
                 </div> 
            }
        </div>
    )
}

