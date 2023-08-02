import React, { useState } from "react";
import "./BooksContainer.css";

export default function BooksContainer({ allBooks }) {
  const booksMarkup = allBooks.map((book) => {
    return (
      <div key={book._id}>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <input type="checkbox" id="read" /> <label htmlFor="read">Read</label>
      </div>
    );
  });

  return <div className="books-container">{booksMarkup}</div>;
}
