import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handler, true);
    return  () => document.removeEventListener("click", handler)}
    ,[])
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

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

  return (
    <div ref={divEl} className="w-48 relative">
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
