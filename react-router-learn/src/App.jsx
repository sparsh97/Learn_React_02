import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="p-1 m-1">
        <Button primary secondary>Click Here</Button>
      </div>
      <div className="p-1 m-1">
        <Button secondary rounded> By now </Button>
      </div>
      <div className="p-1 m-1">
        <Button warn outline> Download</Button>
      </div>
      <div className="p-1 m-1">
        <Button danger rounded outline> OMG </Button>
      </div>
    </>
  );
}

export default App;
