import "./styles.css";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useContext } from "react";

import { Home } from "./Pages/Home";
import { Header } from "./Components/Header";
import { Explore } from "./Pages/Explore";
import { Liked } from "./Pages/Liked";
import { BookMarked } from "./Pages/BookMarked";
import { UserProfile } from "./Pages/UserProfile";
// import { MediaContext } from "../context/socialMediaContext";
import { UserSuggesationData } from "./Pages/UserSuggestionData";
import OIP from "./backend/Images/OIP.jpg";
import { Login } from "../src/Pages/Authentication/Login";
import { SignUp } from "./Pages/Authentication/SignUp";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Liked" element={<Liked />} />
        <Route path="/BookMarked" element={<BookMarked />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/UserSuggesationData" element={<UserSuggesationData />} />
      </Routes>

      {/* <ToastContainer /> */}
    </div>
  );
}
