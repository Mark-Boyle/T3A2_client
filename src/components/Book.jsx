import React, {useEffect, useState} from 'react'
import {fetchData, updateRequest} from '../utils/apiRequest';
import EditableField from './EditableField';
import '../styles/Form.css';

export default function Book({match}) {
    const [book, setBook] = useState({});

    const fetchBook = async () => {
        const data = await fetchData(process.env.REACT_APP_API_URL + `/books/${match.params.id}`)
        setBook(data);  
    };
    
    const updateData = (attributeName, newValue) => {
        const updateData = {
            [attributeName]: newValue
        }      
        updateRequest(process.env.REACT_APP_API_URL + `/books/${book.id}`, updateData, fetchBook)
    }

    const updateReview = (attributeName, newValue) => {
        const updateData = {
            review:{
                [attributeName]: newValue
            }
        }  
        updateRequest(process.env.REACT_APP_API_URL + `/reviews/${book.id}`, updateData, fetchBook)
    }
 
    useEffect(() => {
        fetchBook();
    }, [])

    return (
        <div className="form-container">
            <div className="show-page-container">
                <div className="show-page-image-container">
                    <img src={book.image} alt="bookcover" className="show-card-image"/>
                </div>
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
                    </div>}
                </div>
            </div>
        </div>
    )
}

