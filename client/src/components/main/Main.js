import "./Main.css";
import axios from "axios";
import BooksContainer from "../booksContainer/BooksContainer";

import { useState, useEffect } from "react";

export default function Main() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

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
      <BooksContainer allBooks={allBooks} handleDelete={handleDelete} />
    </main>
  );
}
