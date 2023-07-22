import { useContext } from "react";
import { MediaContext } from "../context/socialMediaContext";
import { Header } from "../Components/Header";
import { MenuSection } from "../Components/MenuSection";
import { Suggesations } from "../Components/Suggesations";

export const BookMarked = () => {
  const { bookMarkedPost, handleBookMarkedPost, showLikedPost } =
    useContext(MediaContext);
  return (
    <div style={{ marginTop: "118px" }}>
      <Header />
      <MenuSection />
      <Suggesations />
      {bookMarkedPost.map((userPost) => {
        return (
          <div className="userProfilePosts1" key={userPost._id}>
            <Header />{" "}
            <div className="cardPost">
              <div style={{ display: "flex" }}>
                <img
                  className="profileImage"
                  src={userPost.userImg}
                  alt="User Profile"
                />
                <strong>{userPost.name}</strong>{" "}
                <span style={{ color: "grey", marginLeft: "10px" }}>
                  {userPost.createdAt}
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <span
                  className="userName"
                  style={{
                    fontSize: "small",
                    marginLeft: "10px",
                    float: "left",
                  }}
                >
                  {userPost.username}
                </span>{" "}
              </div>
              <br /> <br />
              <span className="userPostContent">{userPost.content} </span>{" "}
              <br /> <br />
              <span>
                <img
                  className="img"
                  style={{ width: "100%", height: "300px" }}
                  alt="something went wrong"
                  src={userPost.img}
                ></img>
              </span>
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
          </div>
        );
      })}
    </div>
  );
};

// "bookMarked-Container"
