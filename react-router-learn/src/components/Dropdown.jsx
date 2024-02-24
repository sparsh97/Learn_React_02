import { useState } from "react";
import PropTypes from "prop-types";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (value) => {
    setIsOpen(false);
    onChange(value);
  };
  const renderOptions = options.map((op) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer "
        onClick={() => handleOptionClick(op)}
        key={op.value}
      >
        {op.label}
      </div>
    );
  });
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointe"
        onClick={handleClick}
      >
        {value?.label || "Select......"}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {renderOptions}
        </Panel>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
