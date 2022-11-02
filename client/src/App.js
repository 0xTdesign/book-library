import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import BookDetails from "./Pages/BookDetails";
import { API_URL } from "./api";

function App() {
  const [books, setbooks] = useState([]);
  const [createForm, setCreateForm] = useState({
    title: "",
    author: "",
    description: "",
    year: "",
    isbn: "",
  });

  useEffect(() => {
    //use useEffect if we want to load on page load
    getAllBooks();
  }, []);

  // Handle Changes

  const handleChangeCreate = (e) => {
    setCreateForm({ ...createForm, [e.target.name]: e.target.value });
  };

  //function to get all books
  const getAllBooks = async () => {
    const API = `${API_URL}/books`;
    const res = await axios.get(API);
    setbooks(res.data);
  };

  //Function to create new book
  const createNewBook = async (e) => {
    e.preventDefault();
    const API = `${API_URL}/books`;
    const res = await axios.post(API, createForm);

    // Reset the form
    setCreateForm({ title: "", description: "", year: "", author: "", isbn: "" });

    // Add our new book to the page
    setbooks([...books, res.data]);
  };

  //function to delete book
  const deleteBook = async (bookObj) => {
    const check = window.confirm(`Are you sure you want to delete ${bookObj.title}?`);
    //Stop the rest of the function running if they say no
    if (!check) {
      return;
    }
    const API = `${API_URL}/books/${bookObj._id}`;
    const res = await axios.delete(API);
    if (res.data.deletedCount === 1) {
      getAllBooks();
    } else {
      alert("There was a problem deleteing that book.");
    }
  };

  //function to edit book

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                books={books}
                deleteBook={deleteBook}
                createNewBook={createNewBook}
                handleChangeCreate={handleChangeCreate}
                createForm={createForm}
              />
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
