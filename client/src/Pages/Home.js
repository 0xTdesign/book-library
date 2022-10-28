import React from "react";
import "./Home.css";
import Book from "../Components/Book/Book";
import CreateBook from "../Components/CreateBook/CreateBook";

export default function Home({ createNewBook, handleChangeCreate, createForm, deleteBook, books }) {
  return (
    <div>
      <CreateBook createNewBook={createNewBook} handleChangeCreate={handleChangeCreate} createForm={createForm} />
      <Book books={books} deleteBook={deleteBook} />
    </div>
  );
}
