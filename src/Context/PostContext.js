import { createContext, useEffect, useState, useReducer } from "react";
import axios from "axios";

export const PostContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const [postsData, setPostsData] = useState([]);

  const initialState = {
    postList: [],
  };

  const postReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "Get_Data": {
        return { ...state, postList: [...action.payload] };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get("/api/posts");
        if (postResponse.status === 200) {
          const postData = postResponse.data;
          dispatch({ type: "Get_Data", payload: postData.posts });
        }

        const userResponse = await axios.get("/api/users");
        if (userResponse.status === 200) {
          const userData = postResponse.data;
          dispatch({ type: "Get_User", payload: userData.users });
        }

        const bookmarkResponse = await axios.get("/api/bookmarks");
        if (bookmarkResponse.status === 200) {
          const bookmarksData = bookmarkResponse.data;
          dispatch({ type: "Get_Bookmark", payload: bookmarksData.bookmark });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(state);

  const handlePostData = () => {
    const data = "JAYESH";
    setPostsData(data);
  };

  return (
    <PostContext.Provider value={{ handlePostData }}>
      {children}
    </PostContext.Provider>
  );
};
