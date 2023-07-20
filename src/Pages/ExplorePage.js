import { useContext } from "react";
import { PostContext } from "../Context/PostContext";

export const ExplorePage = () => {
  const { handlePostData } = useContext(PostContext);
  return (
    <div>
      <h1 onClick={handlePostData}>Explore Page Is Here</h1>
    </div>
  );
};
