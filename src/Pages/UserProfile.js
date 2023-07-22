import React, { useContext } from "react";

import { Header } from "../Components/Header";
import { MenuSection } from "../Components/MenuSection";
import { Suggesations } from "../Components/Suggesations";
import { MediaContext } from "../context/socialMediaContext";

export const UserProfile = () => {
  const {
    handleBookMarkedPost,
    showLikedPost,

    userProfileData,
  } = useContext(MediaContext);

  const userProfile = userProfileData[0];

  return (
    <div className="userProfileContainer" style={{ marginTop: "118px" }}>
      <Header />
      <MenuSection />
      <Suggesations />

      {userProfile && ( // Check if userProfile exists
        <div key={userProfile._id}>
          <div className="userProfileInfo">
            <div
              style={{
                margin: "auto",
              }}
            >
              {userProfile.shouldDisplayImage && (
                <img
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "1rem",
                  }}
                  src={userProfile.userImg}
                  alt="User Profile"
                />
              )}
              <span className="name">
                <h2>John Kapoor</h2> <br />
              </span>
            </div>
            <span className="userName"> {userProfile.username}</span>{" "}
            <span>{userProfile.DOB}</span>
            <h3>Live and Let Live!</h3>
            <br />
            <div className="userDetails">
              <span className="info">{userProfileData.length} POST</span>{" "}
              <span className="info">{userProfile.likedBy}Followers</span>
              <span className="info">Following</span>
            </div>
          </div>

          <div>
            {userProfileData.map((userPost) => {
              return (
                <div className="userProfilePosts1" key={userPost._id}>
                  {" "}
                  <div className="cardPost">
                    <div style={{ display: "flex" }}>
                      <strong style={{}}>John Kapoor</strong>{" "}
                      <span style={{ color: "grey", marginLeft: "10px" }}>
                        {userPost.createdAt}
                      </span>
                    </div>
                    <span
                      className="userName"
                      style={{
                        fontSize: "small",
                        marginLeft: "10px",
                        float: "left",
                      }}
                    >
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
      )}
    </div>
  );
};
