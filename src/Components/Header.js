import { useContext } from "react";

import { NavLink } from "react-router-dom";
import OIP from "../backend/Images/OIP.jpg";
import { UserProfile } from "../Pages/UserProfile";
import { MediaContext } from "../context/socialMediaContext";

export const Header = () => {
  const { showUserProfileData, handleSearchBtn } = useContext(MediaContext);
  return (
    <div>
      <div className="header">
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search the user here... "
            onChange={handleSearchBtn}
          />
          <span className="search">Search</span>
        </div>
        <div className="userProfile">
          <img
            className="profileImage"
            style={{ width: "40px", height: "40px" }}
            src={OIP}
            alt="User Profile"
          />
          <NavLink to="/UserProfile" onClick={showUserProfileData}>
            <span
              className="username"
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              John Kapoor
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
