import { useContext, useState } from "react";
// import DropdownMenu from "react-dropdown-menu";

import { MediaContext } from "../Context/socialMediaContext";
import { Header } from "../Components/Header";
import { MenuSection } from "../Components/MenuSection";
import { Suggesations } from "../Components/Suggesations";

export const Home = () => {
  const {
    homeData,
    handleDeletePost,
    handleBookMarkedPost,
    showLikedPost,
    handleLatestButton,
    handleTrendingButton,
  } = useContext(MediaContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleToggleDropdown = (post) => {
    setDropdownOpen(!dropdownOpen);
    setSelectedPost(post);
  };

  const handleEdit = (post) => {
    console.log("Edit post:", post);
  };

  const handleDelete = (post) => {
    handleDeletePost(post._id);
  };
  return (
    <div>
      <Header />
      <MenuSection />
      <Suggesations />
      <div className="home-section" style={{ marginTop: "118px" }}>
        <div className="HomebtnContainer">
          <button className="btn" onClick={handleTrendingButton}>
            Trending
          </button>{" "}
          <button className="btn" onClick={handleLatestButton}>
            Latest
          </button>
        </div>

        {homeData.map((userPost) => {
          return (
            <div className="userProfilePosts1" key={userPost._id}>
              {" "}
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
                      color: "grey",
                    }}
                  >
                    John Kapoor
                  </strong>{" "}
                  <span style={{ color: "grey", marginLeft: "15px" }}>
                    {userPost.createdAt}
                  </span>
                </div>
                <div
                  className="dropdown-toggle"
                  style={{ marginLeft: "400px", fontSize: "38px" }}
                  onClick={() => handleToggleDropdown(userPost)}
                >
                  ...
                </div>
                {dropdownOpen &&
                  selectedPost &&
                  selectedPost._id === userPost._id && (
                    <div
                      className="dropdown-content"
                      style={{ float: "right" }}
                    >
                      <button
                        style={{ padding: "10px", fontWeight: "bold" }}
                        onClick={() => handleEdit(userPost)}
                      >
                        Edit
                      </button>
                      <button
                        style={{ padding: "10px", fontWeight: "bold" }}
                        onClick={() => handleDelete(userPost)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                <div style={{ display: "flex" }}>
                  <span
                    className="userName"
                    style={{
                      fontSize: "small",
                      marginLeft: "29px",

                      color: "grey",
                    }}
                  >
                    {userPost.username}
                  </span>{" "}
                </div>
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
                    ></img>
                  )}
                </span>
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
