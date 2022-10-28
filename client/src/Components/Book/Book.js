import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";

export default function Book({ books, deleteBook }) {
  return (
    <div className="book-container">
      {books.map((bookObj, idx) => {
        return (
          <div>
            <div key={idx} className="book">
              <img src={`https://covers.openlibrary.org/b/isbn/${bookObj.isbn}-L.jpg`} alt={`${bookObj.title} Cover`} />
              <Link className="title" to={`/book/${bookObj._id}`}>
                <h3>Title: {bookObj.title} &#x21AA;</h3>
              </Link>
              <p>Description: {bookObj.description}</p>
              <p>Year: {bookObj.year}</p>
              <p>ISBN: {bookObj.isbn}</p>
              <button onClick={() => deleteBook(bookObj)}>Delete Book</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
