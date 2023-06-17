import React, { createContext } from "react";

const PostsDataContext = createContext();

const PostsDataContextProvider = ({ children }) => {
  return <PostsDataContext.Provider>{children}</PostsDataContext.Provider>;
};

export default PostsDataContextProvider;
