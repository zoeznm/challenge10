import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("main-container") as HTMLElement
);
root.render(<App />);