import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    setBooks([...books, { id: Math.round(Math.random() * 1000), title }]);
    console.log(title);
  };
  const deleteBookbyId = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const updateBookTitle = (id, title) => {
    const updateBooks = books.map((book) => {
      if (book.id == id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updateBooks);
  };
  return (
    <>
      <div className="p-2 m-2 flex flex-col justify-center items-center">
        <BookList
          books={books}
          deleteBookbyId={deleteBookbyId}
          updateBookTitle={updateBookTitle}
        />
        <BookCreate createBook={createBook} />
      </div>
    </>
  );
}

export default App;
