import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
// import reportWebVitals from "./reportWebVitals";
import { PostContext, PostsContextProvider } from "./Context/PostContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

export { PostContext };

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" }); // Start the MirageJS server in development mode
}

root.render(
  <React.StrictMode>
    <Router>
      <PostsContextProvider>
        {" "}
        <App />
      </PostsContextProvider>
    </Router>
  </React.StrictMode>
);
