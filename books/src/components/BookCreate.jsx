import React, { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const [book, setBook] = useState("");
  const addBook = (event) => {
    setBook(event.target.value);
    //createBook(event.target.value);
  };
  const {createBook} = useContext(BooksContext);
  const onSubmit = (e) => {
    e.preventDefault();
    createBook(book);
    setBook("");
  };
  return (
    <>
      <div className="p-2 m-2 rounded-lg text-center flex flex-col h-screen justify-between">
        <form>
          <label className="p-2 m-2">Enter Book</label>
          <input
            className="p-2 m-2 border rounded-lg hover:border-cyan-500"
            type="text"
            placeholder="Enter Book Name"
            value={book}
            onChange={addBook}
          />
          <button
            className="p-2 m-2 bg-green-500 rounded-lg text-center"
            onClick={onSubmit}
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default BookCreate;
