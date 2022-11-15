import React from "react";
import reactdom from "react-dom/client";
import App from "./App";
import "../dist/styles.css";

const root = reactdom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
