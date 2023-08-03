import "./BooksContainer.css";

import Book from "../book/Book";

export default function BooksContainer({ allBooks, handleDelete }) {
  const booksMarkup = allBooks.map((book) => {
    return <Book key={book._id} book={book} handleDelete={handleDelete} />;
  });

  return <div className="books-container">{booksMarkup}</div>;
}
