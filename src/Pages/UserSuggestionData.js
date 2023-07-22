import React, { useContext } from "react";
import { users } from "../backend/db/users";

import { MediaContext } from "../context/socialMediaContext";
import { Header } from "../Components/Header";
import { MenuSection } from "../Components/MenuSection";
import { Suggesations } from "../Components/Suggesations";

export const UserSuggesationData = () => {
  const { suggesationUserProfileData, handleBookMarkedPost, showLikedPost } =
    useContext(MediaContext);
  const userProfile = suggesationUserProfileData[0];

  return (
    <div
      className="userProfileContainer"
      style={{ marginTop: "118px", backgroundColor: "black" }}
    >
      <Header />
      <MenuSection />
      <Suggesations />
      {userProfile && (
        <div>
          <div key={userProfile._id}>
            <div className="userProfileInfo">
              <img
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "1rem",
                }}
                src={userProfile.userImg}
                alt="User Profile"
              />
              <span className="name">
                <h2>{userProfile.name}</h2> <br />
              </span>
              <span className="userName"> {userProfile.username}</span>

              <h3>Live and Let Live!</h3>
              <br />
              <div className="userDetails">
                <span className="info">
                  {suggesationUserProfileData.length} POST
                </span>{" "}
                <span className="info">{userProfile.follower} Followers</span>
                <span className="info">Following</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        {suggesationUserProfileData.map((userPost) => {
          return (
            <div className="userProfilePosts2" key={userPost._id}>
              <div className="cardPost">
                <div style={{ display: "flex" }}>
                  <img
                    className="profileImage"
                    src={userPost.userImg}
                    alt="User Profile"
                  />
                  <strong
                    style={{
                      marginLeft: "5px",
                      float: "left",
                      fontSize: "larger",
                    }}
                  >
                    {userPost.name}
                  </strong>{" "}
                  <span style={{ color: "grey", marginLeft: "10px" }}>
                    {userPost.createdAt}
                  </span>
                </div>
                <span className="userName1" style={{ fontSize: "small" }}>
                  {" "}
                  {userPost.username}
                </span>{" "}
                <br /> <br />
                <span className="userPostContent">
                  {userPost.content}{" "}
                </span>{" "}
                <br /> <br />
                <span>
                  {userPost.shouldDisplayImage && (
                    <img
                      className="img"
                      style={{ width: "100%", height: "300px" }}
                      alt="something went wrong"
                      src={userPost.img}
                    />
                  )}
                </span>{" "}
                <div>
                  {userPost.shouldDisplayVideo && (
                    <video controls style={{ width: "100%", height: "300px" }}>
                      <source src={userPost.video} type="video/mp4" />
                    </video>
                  )}
                </div>
                <div className="ExploreBtnContainer">
                  <button
                    className="btn"
                    onClick={() => showLikedPost(userPost)}
                  >
                    {" "}
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        fontWeight: "bold",
                        borderRadius: "0.5rem",
                        marginLeft: "5px",
                      }}
                    >
                      Like
                    </span>
                  </button>{" "}
                  <span style={{ marginLeft: "10px", fontSize: "20px" }}>
                    {userPost.likes.likeCount}{" "}
                  </span>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn"
                    onClick={() => handleBookMarkedPost(userPost)}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        fontWeight: "bold",
                        borderRadius: "0.5rem",
                      }}
                    >
                      Bookmark{" "}
                    </span>
                  </button>
                  <button className="btn" style={{ marginLeft: "10px" }}>
                    {" "}
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        fontWeight: "bold",
                        borderRadius: "0.5rem",
                      }}
                    >
                      Share
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
