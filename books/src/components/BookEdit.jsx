import React, { useState } from 'react'

function BookEdit({title,updateBookTitle,active}) {
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

export default BookEdit