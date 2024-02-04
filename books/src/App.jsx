import { useEffect } from "react";
import "./App.css";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useBookContext } from "./context/books";


function App() {
  const {fetchAllBooks} = useBookContext();
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
