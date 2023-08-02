import React, { useState } from "react";
import "./BooksContainer.css";

export default function BooksContainer({ allBooks, handleDelete }) {
  const booksMarkup = allBooks.map((book) => {
    return (
      <div key={book._id}>
        <div className="delete-btn">
          <button onClick={() => handleDelete(book._id)}>X</button>
        </div>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <input type="checkbox" id="read" /> <label htmlFor="read">Read</label>
      </div>
    );
  });

  return <div className="books-container">{booksMarkup}</div>;
}
