import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
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
        selection={select}
        onSelect={handleSelect}
      ></Dropdown>
    </>
  );
}

export default App;
