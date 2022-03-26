import { createContext, useState } from 'react';

const PostsContext = createContext({
  posts: [],
  setPosts: () => {},
});

const PostsProvider = ({ contextValues = {}, ...props }) => {
  const [posts, setPosts] = useState([]);
  const mergedContextValues = { posts, setPosts, ...contextValues };
  return (
    <PostsContext.Provider
      value={mergedContextValues}>
      {props.children}
    </PostsContext.Provider>
  );
};

export { PostsProvider, PostsContext };
