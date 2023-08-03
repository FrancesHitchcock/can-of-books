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

  async function handleAddBook(e, formData) {
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/books", formData);
    setAllBooks([...allBooks, res.data]);
    setFormData({
      title: "",
      description: "",
    });
  }

  async function handleDelete(id) {
    const res = await axios.delete(`http://localhost:8080/books/${id}`);
    console.log(res);
    getBooks();
  }

  async function getBooks() {
    const res = await axios.get("http://localhost:8080/books");
    setAllBooks(res.data);
  }

  return (
    <main>
      <AddForm
        handleAddBook={handleAddBook}
        formData={formData}
        handleAddFormChange={handleAddFormChange}
      />
      <BooksContainer allBooks={allBooks} handleDelete={handleDelete} />
    </main>
  );
}
