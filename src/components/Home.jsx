import React, {useContext, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {AuthContext} from "../contexts/AuthProvider"


export default function Home(){
    const [auth, setAuth] = useContext(AuthContext);
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await fetch('http://localhost:3000/books', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setBooks(data);
      };

      useEffect(() => {
        fetchBooks();
      }, []);
      

    return(
        <div>
            {auth.loggedIn ? (
            <div>
                <h1>Logged In</h1>
                <h2>Welcome {auth.username}</h2>
            </div>
            ) : <h1>Not Logged In</h1>}
            <section>
            <ul>
                {books.map(book => <li key={book.id}>{book.title}, {book.author}</li>)}
            </ul>
            </section>
        </div>
    )
}