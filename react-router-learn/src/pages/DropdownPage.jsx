import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

function DropdownPage() {
  const [select, setSelect] = useState(null);
  const handleSelect = (option) => {
    setSelect(option);
  };
  const options = [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
  ];
  return (
    <>
      <Dropdown
        options={options}
        value={select}
        onChange={handleSelect}
      ></Dropdown>
    </>
  );
}

export default DropdownPage;
