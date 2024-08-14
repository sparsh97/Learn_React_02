import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordion from "./components/accordion/Accordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center text-3xl font-bold underline">Hello world!</h1>
      <Accordion />
    </>
  );
}

export default App;
