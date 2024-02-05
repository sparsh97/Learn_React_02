import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="p-1 m-1">
        <Button>Click Here</Button>
      </div>
      <div className="p-1 m-1">
        <Button> By now </Button>
      </div>
      <div className="p-1 m-1">
        <Button> Download</Button>
      </div>
      <div className="p-1 m-1">
        <Button> OMG </Button>
      </div>
    </>
  );
}

export default App;
