import { useContext } from "react";

import { NavLink } from "react-router-dom";
import { MediaContext } from "../Context/socialMediaContext";

export const Suggesations = () => {
  const { handleFollowBtn, showSelectSuggesationData, suggesationUserName } =
    useContext(MediaContext);
  return (
    <div className="suggestions-container">
      <div className="suggesation-sub-container">
        <h2>Suggesation for you</h2>
        {suggesationUserName.map((user) => {
          return (
            <div className="suggesationUserContainer" key={user.name}>
              <NavLink to="/UserSuggesationData">
                {" "}
                <div style={{ display: "flex" }}>
                  <img
                    className="suggesationProfileImg"
                    src={user.userImg}
                    alt="User Profile"
                  />
                  <span
                    className="user"
                    onClick={() => showSelectSuggesationData(user.name)}
                  >
                    <strong
                      style={{
                        marginLeft: "5px",
                        float: "left",
                        fontSize: "larger",
                      }}
                    >
                      {user.name}
                    </strong>
                  </span>
                </div>
              </NavLink>
              <span className="btnContainer">
                <button
                  className="followBtn"
                  onClick={() => handleFollowBtn(user.username)}
                >
                  + Follow
                </button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
