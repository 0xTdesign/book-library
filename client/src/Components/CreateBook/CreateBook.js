import React from "react";
import "./CreateBook.css";

export default function createBook({ createNewBook, handleChangeCreate, createForm }) {
  return (
    <>
      <div className="favourite-book">
        <h1>Tim's Favourite Book</h1>
        <h2>Add new book</h2>
      </div>
      <div className="form-container">
        <form onSubmit={createNewBook}>
          <input
            placeholder="Title of book"
            onChange={handleChangeCreate}
            type="text"
            name="title"
            value={createForm.title}
          />
          <input placeholder="Author" onChange={handleChangeCreate} type="text" name="author" value={createForm.author} />
          <input
            placeholder="Description"
            onChange={handleChangeCreate}
            type="text"
            name="description"
            value={createForm.description}
          />
          <input placeholder="Year" onChange={handleChangeCreate} type="text" name="year" value={createForm.year} />
          <input placeholder="Isbn" onChange={handleChangeCreate} type="text" name="isbn" value={createForm.isbn} />
          <button className="search-btn">Add Book</button>
        </form>
      </div>
    </>
  );
}
