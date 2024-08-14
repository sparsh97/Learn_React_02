import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/hexcolor/RandomColor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center text-3xl font-bold underline">Hello world!</h1>
      <Accordion />
      <RandomColor />
    </>
  );
}

export default App;
