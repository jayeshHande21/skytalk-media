import { makeServer } from "./server";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MediaContext, MediaProvider } from "./context/socialMediaContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { MediaContext };

makeServer();
root.render(
  <StrictMode>
    <Router>
      <MediaProvider>
        <App />
      </MediaProvider>
    </Router>
  </StrictMode>
);
