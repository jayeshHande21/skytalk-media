import { useContext } from "react";
import { MediaContext } from "../context/socialMediaContext";
import { Header } from "../Components/Header";
import { MenuSection } from "../Components/MenuSection";
import { Suggesations } from "../Components/Suggesations";

export const Liked = () => {
  const {
    likedPost,
    handleBookMarkedPost,
    removePostFromLiked,
    showLikedPost,
  } = useContext(MediaContext);
  return (
    <div style={{ marginTop: "118px" }}>
      <Header />
      <MenuSection />
      <Suggesations />

      {likedPost.map((userPost) => {
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
              <div className="Buttons">
                <button onClick={() => removePostFromLiked(userPost)}>
                  Like
                </button>{" "}
                {userPost.likes.likeCount}{" "}
                <button onClick={() => handleBookMarkedPost(userPost)}>
                  Bookmark
                </button>
                <button>Comment</button>
                <button>Share</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
