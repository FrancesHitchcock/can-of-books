import React, { useState } from "react";
import "./BooksContainer.css";

import UpdateForm from "../updateForm/UpdateForm";

export default function BooksContainer({ allBooks, handleDelete }) {
  const [updateVisible, setUpdateVisible] = useState(false);

  function showUpdateForm() {
    setUpdateVisible(updateVisible ? false : true);
  }

  const booksMarkup = allBooks.map((book) => {
    return (
      <div key={book._id}>
        <div className="delete-btn">
          <button onClick={() => handleDelete(book._id)}>X</button>
        </div>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <input type="checkbox" id="read" /> <label htmlFor="read">Read</label>
        <button onClick={showUpdateForm}>Edit book</button>
        {updateVisible && <UpdateForm />}
      </div>
    );
  });

  return <div className="books-container">{booksMarkup}</div>;
}
