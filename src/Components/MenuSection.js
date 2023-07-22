import { useContext } from "react";
import { MediaContext } from "../context/socialMediaContext";
import { NavLink } from "react-router-dom";
export const MenuSection = () => {
  const { suggestions, handleHomeButton, handlePostClick } =
    useContext(MediaContext);
  return (
    <div>
      <div className="menu-section">
        {" "}
        <nav>
          <NavLink to="/Home" onClick={handleHomeButton}>
            {/* <img
                style={{
                  backgroundColor: "pink",
                  width: "30px",
                  // mixBlendMode: "multiply",
                }}
                src={home}
              ></img>{" "} */}
            <span className="menuItem" onClick={suggestions}>
              Home
            </span>
          </NavLink>{" "}
          <br />
          <NavLink to="/Explore" onClick={suggestions}>
            <span className="menuItem">Explore</span>
          </NavLink>{" "}
          <br />
          <NavLink to="/Liked" onClick={suggestions}>
            <span className="menuItem">Liked</span>
          </NavLink>{" "}
          <br />
          <NavLink to="/BookMarked" onClick={suggestions}>
            {/* <img
                style={{
                  backgroundColor: "pink",
                  width: "30px",
                }}
                src={bookmark}
              ></img>{" "} */}
            <span className="menuItem" onClick={suggestions}>
              BookMarked
            </span>
          </NavLink>{" "}
          <br />
          <button className="postBtn" onClick={handlePostClick}>
            POST
          </button>
        </nav>
      </div>
    </div>
  );
};
