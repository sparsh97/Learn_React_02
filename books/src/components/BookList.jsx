import BookShow from "./BookShow";
import { useBookContext } from "../context/books";

function BookList() {
  let { books } = useBookContext();
  if (books == undefined || books.length  == 0) {
    books = []
  }
  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return (
    <>
      <div>
        <div className="p-2 m-2">
          <p className="p-1 m-1">Book List</p>
          <div className="p-1 m-1 flex justify-around items-center">
            {renderBooks}
          </div>
          ;
        </div>
      </div>
    </>
  );
}

export default BookList;
