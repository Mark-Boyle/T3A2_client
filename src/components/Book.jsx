import React, {useEffect, useState, useCallback } from 'react'
import {fetchData, updateRequest} from '../utils/apiRequest';
import EditableField from './EditableField';
import '../styles/Form.css';

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
        <div className="form-container">
            <div className="form">
            <h1>{book.title}</h1>
            <h4 className="label">Title: </h4><EditableField value={book.title} updateData={updateData} attribute='title' />
            <h4 className="label">Author: </h4><EditableField value={book.author} updateData={updateData} attribute='author'/>
            <h4 className="label">Year: </h4><EditableField value={book.year} updateData={updateData} attribute='year'/>
            <h4 className="label">Genre: </h4><EditableField value={book.genre} updateData={updateData} attribute='genre'/>
            <h4 className="label">Status: </h4><EditableField value={book.status} updateData={updateData} attribute='status'/>
            {/* wrapped in short circuit logic */}
            
            {book.review && <div>
                <h3>Review</h3>
                 <EditableField value={book.review.description} updateData={updateReview} attribute='description'/>
                 <EditableField value={book.review.rating} updateData={updateReview} attribute='rating'/>
                 </div> 
            }
            </div>
        </div>
    )
}

