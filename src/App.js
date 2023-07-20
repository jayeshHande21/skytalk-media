import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { ExplorePage } from "./Pages/ExplorePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <span style={{ color: "pink" }}>AAYUSHA</span> you are{" "}
          <strong>Awesome 😊💗</strong>
        </h2>
      </header>

      <NavLink to="/ExplorePage">Explore</NavLink>

      <Routes>
        <Route path="/ExplorePage" element={<ExplorePage />} />
      </Routes>
    </div>
  );
}

export default App;
