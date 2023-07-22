import { createContext, useState, useEffect } from "react";

import { v4 as uuid } from "uuid";

import { formatDate } from "../backend/utils/authUtils";

import OIP from "../backend/Images/OIP.jpg";
import { posts } from "../backend/db/posts";
import { users } from "../backend/db/users";

export const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [likedPost, setLikedPost] = useState([]);
  const [bookMarkedPost, setBookMarkedPost] = useState([]);
  const [userProfileData, setUserProfileData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [suggesationUserName, setSuggestionUserName] = useState([]);
  const [suggesationUserProfileData, setSuggesationUserProfileData] = useState(
    []
  );
  const [recentContent, setRecentContent] = useState([]);
  const [showUpdatedPost, setShowUpdatedPost] = useState(posts);
  const [formElements, setFormElements] = useState([]);
  const [likedButtonClicked, setLikedButtonClicked] = useState(false);
  const [postBtnClicked, setPostBtnClicked] = useState(false);
  const [data, setData] = useState(posts);
  const [userData, setUserData] = useState(users);

  //--------------> handle search button <-----------------------

  const handleSearchBtn = (event) => {
    const userSearched = event.target.value;

    if (userSearched) {
      const post = data.filter(({ name }) =>
        name.toUpperCase().includes(userSearched.toUpperCase())
      );
      setShowUpdatedPost(post);
    } else {
      setShowUpdatedPost(data);
    }
  };

  // ----------------->  suggesation Users Data Function <----------------------

  const suggestions = () => {
    const uniqueUsernames = data.reduce((uniqueNames, post) => {
      if (post.name !== "John Kapoor") {
        const existingName = uniqueNames.find(
          (nameObj) => nameObj.name === post.name
        );

        if (!existingName) {
          uniqueNames.push({
            id: post._id,
            name: post.name,
            username: post.username,
            userImg: post.userImg,
          });
        }
      }
      return uniqueNames;
    }, []);

    setSuggestionUserName(uniqueUsernames);
  };
  const handleFollowBtn = (userName) => {
    const updateFollower = data.map((user) => {
      if (user.username === userName) {
        return { ...user, follower: user.follower + 1 };
      } else return { ...user };
    });

    setData(updateFollower);

    const updatedUserNames = suggesationUserName.filter(
      (user) => user.username !== userName
    );
    setSuggestionUserName(updatedUserNames);
  };

  const showSelectSuggesationData = (selectUser) => {
    const updatedCode = data.filter((userPost) => userPost.name === selectUser);
    setSuggesationUserProfileData(updatedCode);
  };

  const showUserProfileData = () => {
    const filteredData = showUpdatedPost.filter(
      (userData) => userData.username === "@johnKapoor"
    );
    setUserProfileData(filteredData);
  };
  // -----------------------------------------------------suggestions End------------

  // -------------------Liked Button Handle----------->
  const showLikedPost = (recentLikedPost) => {
    const updatedData = data.map((userPost) => {
      if (userPost._id === recentLikedPost._id) {
        if (likedButtonClicked) {
          return {
            ...userPost,
            likes: {
              ...userPost.likes,
              likeCount: userPost.likes.likeCount - 1,
            },
          };
        } else {
          return {
            ...userPost,
            likes: {
              ...userPost.likes,
              likeCount: userPost.likes.likeCount + 1,
            },
          };
        }
      } else {
        return userPost;
      }
    });

    setShowUpdatedPost(updatedData);
    setData(updatedData);
    setSuggesationUserProfileData(updatedData);
    setLikedPost(updatedData);
    setHomeData(updatedData);
    setUserData(updatedData);
    setUserProfileData(updatedData);
    setLikedButtonClicked(!likedButtonClicked);

    const isLiked = likedPost.find(
      (post) => post.content === recentLikedPost.content
    );

    if (!isLiked) {
      setLikedPost([...likedPost, recentLikedPost]);
    }
  };

  const removePostFromLiked = (userPost) => {
    const removeData = likedPost.filter((post) => post._id !== userPost._id);
    setLikedPost(removeData);
  };

  // ------------------>  BOOKMARKED POST --------------------------->

  const handleBookMarkedPost = (recentBookMarked) => {
    const isBookMarked = bookMarkedPost.find(
      (post) => post.content === recentBookMarked.content
    );

    if (!isBookMarked) {
      setBookMarkedPost([...bookMarkedPost, recentBookMarked]);
    }
  };

  //-------------> TRENDING BUTTON ------------->

  const handleTrendingButton = () => {
    const sortedByLikes = [...homeData].sort((a, b) => {
      return b.likes.likeCount - a.likes.likeCount;
    });

    setHomeData(sortedByLikes);
  };

  // ---------------> LATEST BUTTON --------------->

  const handleLatestButton = () => {
    const sortedByDate = [...homeData].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateA - dateB;
    });

    setHomeData(sortedByDate);
  };

  const handleHomeButton = () => {
    const filteredData = data.filter(
      (userData) => userData.username === "@johnKapoor"
    );
    setHomeData(filteredData);
  };

  const addNewPost = (event) => {
    setRecentContent(event.target.value);
  };

  // ------------------> FORM DIV HANDLE  <-------------------

  const submitFormBtn = () => {
    const updatedContent = {
      _id: uuid(),
      content: recentContent,
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      userImg: OIP,

      name: "John Kapoor",
      username: "@johnKapoor",
      createdAt: formatDate().slice(0, 10),
    };

    setShowUpdatedPost([updatedContent, ...showUpdatedPost]);
    setPostBtnClicked(!postBtnClicked);
  };

  const handlePostClick = () => {
    setPostBtnClicked(!postBtnClicked);
    const formElements = [{ label: "write your Thoughts...", type: "text" }];
    setFormElements(formElements);
  };

  const handleDeletePost = (deletePostId) => {
    const updatedData = homeData.filter((data) => data._id !== deletePostId);
    setHomeData(updatedData);
  };

  return (
    <MediaContext.Provider
      value={{
        handleFollowBtn,
        data,
        userData,
        submitFormBtn,
        homeData,
        handlePostClick,
        handleHomeButton,
        handleLatestButton,
        handleTrendingButton,
        showLikedPost,
        likedPost,
        handleDeletePost,
        handleSearchBtn,
        bookMarkedPost,
        handleBookMarkedPost,
        userProfileData,
        showUserProfileData,
        suggesationUserProfileData,
        suggesationUserName,
        suggestions,
        showUpdatedPost,
        showSelectSuggesationData,
        formElements,
        postBtnClicked,
        removePostFromLiked,
        addNewPost,
        // likePost,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};
