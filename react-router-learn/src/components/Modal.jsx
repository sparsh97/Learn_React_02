import React from "react";
import ReactDOM from 'react-dom'

function Modal() {
  return ReactDOM.createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In architecto
        incidunt sed officiis molestiae amet debitis adipisci, numquam
        voluptatibus, hic explicabo quisquam aut eveniet, dolore nobis! Dolor
        adipisci minima corporis.
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
