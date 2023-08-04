import "./Main.css";
import axios from "axios";
import BooksContainer from "../booksContainer/BooksContainer";
import AddForm from "../addForm/AddForm";

import { useState, useEffect } from "react";

export default function Main() {
  const [allBooks, setAllBooks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    getBooks();
  }, []);

  function handleAddFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleUpdateBook(e, id, book) {
    e.preventDefault();
    await axios.put(`https://can-of-books-ehwb.onrender.com/books/${id}`, book);
    getBooks();
  }

  async function handleAddBook(e, formData) {
    e.preventDefault();
    const res = await axios.post(
      "https://can-of-books-ehwb.onrender.com/books",
      formData
    );
    setAllBooks([...allBooks, res.data]);
    setFormData({
      title: "",
      description: "",
    });
  }

  async function handleDelete(id) {
    const res = await axios.delete(
      `https://can-of-books-ehwb.onrender.com/books/${id}`
    );
    console.log(res);
    getBooks();
  }

  async function getBooks() {
    const res = await axios.get("https://can-of-books-ehwb.onrender.com/books");
    setAllBooks(res.data);
  }

  return (
    <main>
      <AddForm
        handleAddBook={handleAddBook}
        formData={formData}
        handleAddFormChange={handleAddFormChange}
      />
      <BooksContainer
        allBooks={allBooks}
        handleDelete={handleDelete}
        handleUpdateBook={handleUpdateBook}
      />
    </main>
  );
}
