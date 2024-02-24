import React, { useState } from 'react'

function Dropdown({options}) {
    const [isOpen, setIsOpen] = useState(false);
    const renderOptions = options.map( op => {
        return <div key={op.value}>{op.label}</div>
    });
    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

  return (
    <div>
        <div onClick={handleClick}>Select...</div>
        {isOpen && <div >{renderOptions}</div>}
    </div>
  )
}

export default Dropdown