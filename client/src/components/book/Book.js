import React, { useState } from "react";

import "./Book.css";
import UpdateForm from "../updateForm/UpdateForm";
import axios from "axios";

export default function Book({ book, handleDelete }) {
  const [updateVisible, setUpdateVisible] = useState(false);

  async function handleUpdateBook(e, id, book) {
    e.preventDefault();
    await axios.put(`http://localhost:8080/books/${id}`, book);
  }

  function showUpdateForm() {
    setUpdateVisible(updateVisible ? false : true);
  }

  return (
    <div className="book-box">
      <div className="delete-btn">
        <button onClick={() => handleDelete(book._id)}>X</button>
      </div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <input type="checkbox" id="read" /> <label htmlFor="read">Read</label>
      <button onClick={showUpdateForm}>Edit book</button>
      {updateVisible && (
        <UpdateForm handleUpdateBook={handleUpdateBook} id={book._id} />
      )}
    </div>
  );
}
