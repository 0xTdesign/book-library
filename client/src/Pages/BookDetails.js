import "./BookDetails.css";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BookDetails() {
  const [book, setBook] = useState({});
  const [formUpdate, setformUpdate] = useState({
    title: "",
    author: "",
    description: "",
    year: "",
    isbn: "",
  });
  const { id } = useParams();

  const handleChangeUpdate = (e) => {
    setformUpdate({ ...formUpdate, [e.target.name]: e.target.value });
  };

  const updateBook = async (e) => {
    e.preventDefault();
    const bodyToSend = {};
    for (const prop in formUpdate) {
      // For in -
      // prop = "title"
      // formUpdate[prop] = ""
      if (formUpdate[prop] !== "") {
        //
        bodyToSend[prop] = formUpdate[prop]; //
      }
    }

    const API = `http://localhost:8080/books/${id}`;
    const res = await axios.put(API, bodyToSend);
    console.log(res);
    getBookDetails();
  };

  useEffect(() => {
    getBookDetails();
  }, []);

  const getBookDetails = async () => {
    const API = `http://localhost:8080/books/${id}`;
    const res = await axios.get(API);
    setBook(res.data[0]); // Return first item of array
  };
  if (!book) {
    return (
      <>
        <h1>Woops, Thats a 404</h1>
        <p>The book with {id} no longer exists</p>
        <Link to={"/"}>Home</Link>
      </>
    );
  }

  return (
    <div>
      <div className="books">
        <Link to={"/"}>&#8617;Home</Link>
        <h2>Title: {book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Description: {book.description}</p>
        <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} alt={`${book.title} Cover`} />
        <p>ISBN: {book.isbn}</p>
        <p>Year: {book.year}</p>
      </div>

      <form onSubmit={updateBook}>
        <input name="title" type="text" value={formUpdate.title} onChange={handleChangeUpdate} placeholder="Title" />
        <input name="author" value={formUpdate.author} onChange={handleChangeUpdate} placeholder="Author" />
        <input name="description" value={formUpdate.description} onChange={handleChangeUpdate} placeholder="Description" />
        <input name="year" value={formUpdate.year} onChange={handleChangeUpdate} placeholder="Year" />
        <input name="isbn" value={formUpdate.isbn} onChange={handleChangeUpdate} placeholder="Isbn" />
        <button>Update Book Details</button>
      </form>
    </div>
  );
}
