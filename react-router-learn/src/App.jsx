import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    {value: 'red', label: 'Red'},
    {value: 'blue', label: 'Blue'},
    {value: 'green', label: 'Green'}
  ]
  return (<><Dropdown options={options}></Dropdown></>);
}

export default App;
