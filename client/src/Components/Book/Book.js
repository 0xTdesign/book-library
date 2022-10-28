import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";

export default function Book({ books, deleteBook }) {
  return (
    <div>
      <h2>Tim's Favourite Book</h2>
      {books.map((bookObj, idx) => {
        return (
          <div key={idx} className="book">
            <Link to={`/book/${bookObj._id}`}>
              <h3>Title: {bookObj.title}</h3>
            </Link>
            <p>Description: {bookObj.description}</p>
            <p>Year: {bookObj.year}</p>
            <p>ISBN: {bookObj.isbn}</p>
            <button onClick={() => deleteBook(bookObj)}>Delete Book</button>
            <img src={`https://covers.openlibrary.org/b/isbn/${bookObj.isbn}-L.jpg`} alt={`${bookObj.title} Cover`} />
          </div>
        );
      })}
    </div>
  );
}
