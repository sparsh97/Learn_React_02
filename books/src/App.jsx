import { useEffect, useContext } from "react";
import "./App.css";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import BooksContext from "./context/books";


function App() {
  const {fetchAllBooks} = useContext(BooksContext);
  useEffect(() => {
    fetchAllBooks();
  }, []);

  
  
  return (
    <>
      <div className="p-2 m-2 flex flex-col justify-center items-center">
        <BookList/>
        <BookCreate/>
      </div>
    </>
  );
}

export default App;
