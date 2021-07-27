import React, {useEffect, useState, useContext} from 'react'
import {fetchData, updateRequest} from '../utils/apiRequest';
import ReviewForm from './ReviewForm';
import EditableField from './EditableField';
import {AuthContext} from "../contexts/AuthProvider";
import '../styles/Form.css';

export default function Book({match}) {

    const [book, setBook] = useState({});
    const [auth, setAuth] = useContext(AuthContext);

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
                    <h4 className="label">Title: </h4><EditableField value={book.title} updateData={updateData} bookUserId={book.user_id} attribute='title' />
                    <h4 className="label">Author: </h4><EditableField value={book.author} updateData={updateData} bookUserId={book.user_id} attribute='author'/>
                    <h4 className="label">Year: </h4><EditableField value={book.year} updateData={updateData}  bookUserId={book.user_id} attribute='year'/>
                    <h4 className="label">Genre: </h4><EditableField value={book.genre} updateData={updateData} bookUserId={book.user_id} attribute='genre'/>
                    <h4 className="label">Status: </h4><EditableField value={book.status} updateData={updateData} bookUserId={book.user_id} attribute='status'/>
                    
                    {/* Only render reviews if the book has been read */}
                    {(book.status === 'read') &&
                    // If a review exists then render the following editable fields 
                    ((book.review) ?
                        <div>
                            <h2>Review</h2>
                            <h5 className="label">Description: </h5>
                                <EditableField value={book.review.description} updateData={updateReview} bookUserId={book.user_id} attribute='description'/>
                            <h5 className="label">Rating: </h5>
                                <EditableField value={book.review.rating} updateData={updateReview} bookUserId={book.user_id} attribute='rating'/>
                            
                        </div>
                        : 
                        // If no review exists and the user logged in is the same as the user id for the book then render the review form to create a new review
                        (auth.userId == book.user_id) &&
                            <>
                                <ReviewForm book_id={book.id}/>
                            </>
                    )}
                </div>
            </div>
        </div>
    )
}

