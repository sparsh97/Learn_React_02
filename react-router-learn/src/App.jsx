import { useState } from "react";
import "./App.css";
import Link from "./components/Link";
import Routes from "./components/Routes";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <div>
      <Link to="/test">Go to Accordion</Link>
      <div className="p-2 m-2 rounded">
        <Routes path="/accordion">
          <AccordionPage></AccordionPage>
        </Routes>
        <Routes path="/dropdown">
          <DropdownPage></DropdownPage>
        </Routes>
      </div>
    </div>
  );
}

export default App;
