import React, { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, deleteBookbyId, updateBookTitle }) {
  const [active, SetActive] = useState(true);
  const onDelete = () => {
    deleteBookbyId(book.id);
  };
  const onEdit = () => {
    SetActive(prev => !prev);
  }
  return (
    <div className="border border-blue-400 rounded-lg w-full text-white m-2 p-2 flex flex-col justify-between text-center">
      <p className="p-2 m-2">
        <BookEdit title={book} updateBookTitle={updateBookTitle} active={active} />
      </p>
      <div className="m-2">
        <button className="m-1 p-1 bg-red-400 rounded-md" onClick={onDelete}>
          Delete
        </button>
        <button className="m-1 p-1 bg-green-400 rounded-md" onClick={onEdit}>
          {active ? "Edit" : "Save"}
        </button>
      </div>
    </div>
  );
}

export default BookShow;
