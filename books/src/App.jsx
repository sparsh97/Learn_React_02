import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const fetchAllBooks = async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchAllBooks();
  }, [books]);

  const createBook = async (title) => {
    const response = await axios.post("http://127.0.0.1:3001/books", {
      title,
    });
    setBooks([...books, response?.data]);
  };

  const deleteBookbyId = async(id) => {
    await axios.delete(`http://127.0.0.1:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const updateBookTitle = async(id, title) => {
    const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
      title
    });

    const updateBooks = books.map((book) => {
      if (book.id == id) {
        return { ...book, ...response.data };
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
