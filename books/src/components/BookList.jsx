import React from "react";
import BookShow from "./BookShow";

function BookList({ books, deleteBookbyId, updateBookTitle }) {
  const renderBooks = books.map((book) => {
    return (
      <BookShow
        deleteBookbyId={deleteBookbyId}
        key={book.id}
        book={book}
        updateBookTitle={updateBookTitle}
      />
    );
  });
  return <div>{renderBooks}</div>;
}

export default BookList;
