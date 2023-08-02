import React from "react";
import "./BooksContainer.css";

export default function BooksContainer({ allBooks }) {
  const booksMarkup = allBooks.map((book) => {
    return <div>{book.title}</div>;
  });

  return <div className="books-container">{booksMarkup}</div>;
}
