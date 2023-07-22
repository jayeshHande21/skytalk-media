import { makeServer } from "./server";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

makeServer();
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
