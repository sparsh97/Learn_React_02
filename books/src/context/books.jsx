import axios from "axios";
import { createContext, useContext, useState } from "react";

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const fetchAllBooks = async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    setBooks(response.data);
  };
  const createBook = async (title) => {
    const response = await axios.post("http://127.0.0.1:3001/books", {
      title,
    });
    setBooks([...books, response?.data]);
  };

  const deleteBookbyId = async (id) => {
    await axios.delete(`http://127.0.0.1:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const updateBookTitle = async (id, title) => {
    const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
      title,
    });

    const updateBooks = books.map((book) => {
      if (book.id == id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updateBooks);
  };
  const valueToShare = {
    books,
    fetchAllBooks,
    deleteBookbyId,
    updateBookTitle,
    createBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export function useBookContext() {
  return useContext(BooksContext);
}
export { BooksProvider };
export default BooksContext;
