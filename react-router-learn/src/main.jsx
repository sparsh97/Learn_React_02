import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NaviagationProvider } from "./context/Navigation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NaviagationProvider>
      <App />
    </NaviagationProvider>
  </React.StrictMode>
);
