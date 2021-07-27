import React, {useState} from 'react';
import { postReview } from '../utils/apiRequest';
import '../styles/Form.css';

export default function ReviewForm(props) {

    const formInitialState = {
        review: {
            book_id: (props.book_id),
            description: '',
            rating: 0
        }
    }

    const [reviewForm, setReviewForm] = useState(formInitialState)

    const changeInput = (event) => {
        setReviewForm({
            review:{
                ...reviewForm.review,
                [event.target.name]: event.target.value
            }  
        })
    }

    const createNewReview = (event) => {
        postReview(reviewForm);
        setReviewForm(formInitialState);
    }

    const {book_id, description, rating} = reviewForm.review

    return (
        <div>
            <form className="form" onSubmit={createNewReview}>
                <h2>Add a Review</h2>
                <label>Description: 
                    <input type="text" name="description" id="description" value={description} onChange={changeInput}/>
                </label>
                <label>Rating: 
                    <input type="number" name="rating" id="rating" value={rating} onChange={changeInput}/>
                </label>
                <input className="form-button" type="submit" value="Add Review" />
            </form>
        </div>
    )
}
