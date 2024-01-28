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
  return (
    <>
    <div>
      <div className="p-2 m-2">
        <p className="p-1 m-1">Book List</p>
        <div className="p-1 m-1 flex justify-around items-center">{renderBooks}</div>;
      </div>
    </div>
    </>
  )
}

export default BookList;
