import React, {useState} from 'react';
import { postData } from '../utils/apiRequest';
import '../styles/Form.css';

export default function BookForm({history}) {
    const formInitialState = {
        book:{
            title: '',
            author: '',
            year: 1,
            genre: '',
            status: 'unread'
        }  
      }

    const [bookForm, setBookForm] = useState(formInitialState)
    
    const changeInput = (event) => {
          setBookForm({
              book:{
                  ...bookForm.book,
                  [event.target.name]: event.target.value
              }  
          })
      }

      const createNewBook = (event) => {
          event.preventDefault();
          postData(event);
          (status === 'unread') ? history.push('/wishlist') : history.push('/history');
      }


      const {title, author, year, genre, status} = bookForm.book
    return (
        <div className="form-container">
            <form className="form" onSubmit={createNewBook}>
                <h2>Add a Book</h2>
                <label>Title: 
                    <input type="text" name="title" id="title" value={title} onChange={changeInput}/>
                </label>
                <label>Author: 
                    <input type="text" name="author" id="author" value={author} onChange={changeInput}/>
                </label>
                <label>Year: 
                    <input type="number" name="year" id="year" value={year} onChange={changeInput}/>
                </label>
                <label>Genre: 
                    <input type="text" name="genre" id="genre" value={genre} onChange={changeInput}/>
                </label>
                <label>Status:</label>
                <label>Read: 
                    <input className="checkbox" type="checkbox" name="status" id="status" value='read' onChange={changeInput}/>
                </label>
                <label>Unread: 
                    <input className="checkbox" type="checkbox" name="status" id="status" value='unread' onChange={changeInput}/>
                </label>
                <label>Image:  
                    <input type="file" name="bookimage" id="bookimage" accept='image/*'/>
                </label>
                <input className="form-button" type="submit" value="Add Book" />
            </form>
        </div>
    )
}
