import "./BooksContainer.css";

import Book from "../book/Book";

export default function BooksContainer({
  allBooks,
  handleDelete,
  handleUpdateBook,
}) {
  const booksMarkup = allBooks.map((book) => {
    return (
      <Book
        key={book._id}
        book={book}
        handleDelete={handleDelete}
        handleUpdateBook={handleUpdateBook}
      />
    );
  });

  return <div className="books-container">{booksMarkup}</div>;
}
