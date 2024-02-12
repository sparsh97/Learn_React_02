import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      label: "a",
      content: "re",
    },
    { label: "ab", content: "rebc" },
    { label: "abc", content: "rbcbe" },
  ];
  return <Accordion items={items} />;
}

export default App;
