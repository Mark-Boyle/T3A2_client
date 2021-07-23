import React, {useState} from 'react';
import { postData } from '../utils/apiRequest';
import '../styles/Form.css';

export default function BookForm() {
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

    const statusChangeInput = (event) => {
        setBookForm({
            book:{
                ...bookForm.book,
                [event.target.name]: bookForm.book.status == 'unread' ? 'read' : 'unread'
            } 
        })
    }

      const createNewBook = (event) => {
          event.preventDefault();
          postData(process.env.REACT_APP_API_URL + "/books", bookForm)
          setBookForm(formInitialState)
      }


      const {title, author, year, genre, status} = bookForm.book
    return (
        <div className="form-container">
            <form className="form" onSubmit={createNewBook}>
                <h2>Add a Book</h2>
                <label>Title</label>
                <input type="text" name="title" id="title" value={title} onChange={changeInput}/>
                <label>Author</label>
                <input type="text" name="author" id="author" value={author} onChange={changeInput}/>
                <label>Year</label>
                <input type="number" name="year" id="year" value={year} onChange={changeInput}/>
                <label>Genre</label>
                <input type="text" name="genre" id="genre" value={genre} onChange={changeInput}/>
                <label>Status</label>
                <p>{bookForm.book.status}</p>
                <input className="checkbox" type="checkbox" name="status" id="status" onChange={statusChangeInput}/>
                <input className="form-button" type="submit" value="Add Book" />
            </form>
        </div>
    )
}
