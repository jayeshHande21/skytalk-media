import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

export const PostsContextProvider = ({ childern }) => {
  return <PostsContext.Provider value={{}}>{childern}</PostsContext.Provider>;
};
