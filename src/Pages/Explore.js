import { useContext } from "react";

import { NavLink } from "react-router-dom";

import { MediaContext } from "../context/socialMediaContext";
import bookmark from "../backend/Images/bookmark-white.png";
import { Header } from "../Components/Header";
import { MenuSection } from "../Components/MenuSection";
import { Suggesations } from "../Components/Suggesations";

export const Explore = () => {
  const {
    data,
    likePost,
    handleBookMarkedPost,
    showLikedPost,
    showUpdatedPost,
    formElements,
    handleLikedPost,
    submitFormBtn,
    postBtnClicked,
    handlePostClick,
    addNewPost,
  } = useContext(MediaContext);

  return (
    <div>
      {" "}
      <Header />
      <MenuSection />
      <Suggesations />
      <div className="exploreFeed" style={{ marginTop: "118px" }}>
        {postBtnClicked &&
          formElements.map((post, index) => {
            return (
              <div key={index} className="formDetails">
                <h2>New Post</h2>
                <button
                  onClick={handlePostClick}
                  style={{ float: "right", marginTop: "0px" }}
                >
                  X
                </button>

                <label className="formLabel">
                  {post.label}
                  <input
                    type="text"
                    onChange={addNewPost}
                    style={{ borderRadius: "1rem" }}
                  />
                  <div style={{ justifyContent: "space-between" }}>
                    <button
                      onClick={submitFormBtn}
                      style={{
                        // backgroundColor: "blue",
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "16px",
                        borderRadius: "0.5rem",
                        width: "80px",
                        padding: "8px",
                        float: "right",
                        marginTop: "3px",
                      }}
                    >
                      POST
                    </button>
                  </div>
                </label>
              </div>
            );
          })}
        {showUpdatedPost.map((userPost) => {
          return (
            <div key={userPost._id}>
              <div className="cardPost">
                <div style={{ display: "flex" }}>
                  <img
                    className="profileImage"
                    src={userPost.userImg}
                    alt="User Profile"
                  />
                  <strong
                    style={{
                      color: "white",
                      marginLeft: "5px",
                      float: "left",
                      fontSize: "larger",
                    }}
                  >
                    {userPost.name}
                  </strong>{" "}
                  <span
                    style={{
                      color: "white",
                      marginLeft: "14px",
                      fontSize: "18px",
                    }}
                  >
                    {userPost.createdAt}
                  </span>
                </div>
                <span
                  className="userName1"
                  style={{ color: "white", fontSize: "16px" }}
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
                <div>
                  {userPost.shouldDisplayVideo && (
                    <video controls style={{ width: "100%", height: "300px" }}>
                      <source src={userPost.video} type="video/mp4" />
                    </video>
                  )}
                </div>
              </div>
              <br />
              <div className="ExploreBtnContainer">
                <button className="btn" onClick={() => showLikedPost(userPost)}>
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
          );
        })}
      </div>
    </div>
  );
};
