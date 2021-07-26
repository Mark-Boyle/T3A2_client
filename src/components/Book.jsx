import React, {useEffect, useState, useContext} from 'react'
import {fetchData, updateRequest} from '../utils/apiRequest';
import ReviewForm from './ReviewForm';
import EditableField from './EditableField';
import {AuthContext} from "../contexts/AuthProvider";
import '../styles/Form.css';


export default function Book({match}) {

    // console.log(match.params.id)
    const [book, setBook] = useState({});
    const [auth, setAuth] = useContext(AuthContext);

    const fetchBook = async () => {
        const data = await fetchData(process.env.REACT_APP_API_URL + `/books/${match.params.id}`)
        setBook(data);  
        console.log("set book data "+data)
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
    
    // console.log(book.id)
    // console.log(book)
    return (
        <div className="form-container">
            <div className="show-page-container">
                <div className="show-page-image-container">
                    <img src={book.image} alt="bookcover" className="show-card-image"/>
                </div>
                <div className="form">
                {/* {errorMessage && (<h5 className="error-message">{errorMessage}</h5>)}  */}
                    <h1>{book.title}</h1>
                    <h4 className="label">Title: </h4><EditableField value={book.title} updateData={updateData} bookUserId={book.user_id} attribute='title' />
                    <h4 className="label">Author: </h4><EditableField value={book.author} updateData={updateData} bookUserId={book.user_id} attribute='author'/>
                    <h4 className="label">Year: </h4><EditableField value={book.year} updateData={updateData}  bookUserId={book.user_id} attribute='year'/>
                    <h4 className="label">Genre: </h4><EditableField value={book.genre} updateData={updateData} bookUserId={book.user_id} attribute='genre'/>
                    <h4 className="label">Status: </h4><EditableField value={book.status} updateData={updateData} bookUserId={book.user_id} attribute='status'/>
                    {/* wrapped in short circuit logic */}
                    
                    {(book.status === 'read') &&
                    ((book.review) ?
                    
                     <div>
                        <h3>Review</h3>
                        <EditableField value={book.review.description} updateData={updateReview} bookUserId={book.user_id} attribute='description'/>
                        <EditableField value={book.review.rating} updateData={updateReview} bookUserId={book.user_id} attribute='rating'/>
                    </div>

                    : 
                    //  (auth.userId == book.user_id &&)
                        <ReviewForm book_id={book.id}/>
                    )}
                </div>
            </div>
        </div>
    )
}

