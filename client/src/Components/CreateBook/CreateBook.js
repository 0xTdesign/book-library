import React from "react";
import "./CreateBook.css";

export default function createBook({ createNewBook, handleChangeCreate, createForm }) {
  return (
    <>
      <h2>Add new book</h2>
      <form onSubmit={createNewBook}>
        <input placeholder="Title of book" onChange={handleChangeCreate} type="text" name="title" value={createForm.title} />
        <br />
        <input placeholder="Author" onChange={handleChangeCreate} type="text" name="author" value={createForm.author} />
        <br />
        <input
          placeholder="Description"
          onChange={handleChangeCreate}
          type="text"
          name="description"
          value={createForm.description}
        />
        <br />
        <input placeholder="Year" onChange={handleChangeCreate} type="text" name="year" value={createForm.year} />
        <br />
        <input placeholder="Isbn" onChange={handleChangeCreate} type="text" name="isbn" value={createForm.isbn} />
        <button>Add Book</button>
      </form>
    </>
  );
}
