import  { useState } from 'react'
import { useBookContext } from '../context/books';
import PropTypes from "prop-types";
function BookEdit({title, active}) {
  const {books, updateBookTitle} = useBookContext()
  const [titles, setTitles] = useState(title?.title);
  const titleChange = (e) => {
    setTitles(e.target.value);
    updateBookTitle(title?.id, titles);
  }
  return (
    <div className='p-1 m-1'>
      <input type="text" name="title" id="title" value={titles} 
        onChange={titleChange}
        readOnly={active}
        className='text-black'
      />
    </div>
  )
}
BookEdit.propTypes = {
  book: PropTypes.object,
  active: PropTypes.bool.isRequired
}
export default BookEdit