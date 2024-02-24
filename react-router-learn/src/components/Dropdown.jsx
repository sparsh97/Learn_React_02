import { useState } from "react";
import PropTypes from "prop-types";
function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (value) => {
    setIsOpen(false);
    onSelect(value);
  };
  const renderOptions = options.map((op) => {
    return (
      <div className="p-1" onClick={() => handleOptionClick(op)} key={op.value}>
        {op.label}
      </div>
    );
  });
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  let content = 'Select.....';
  if (selection) {
    content = selection?.label;
  }
  return (
    <div className="p-2 m-1 borde rounded-2xl">
      <div className="p-1 m-1 border border-black rounded-xl" onClick={handleClick}>{content}</div>
      {isOpen && <div className="m-1">{renderOptions}</div>}
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  selection: PropTypes.object,
  onSelect: PropTypes.func.isRequired
};

export default Dropdown;
