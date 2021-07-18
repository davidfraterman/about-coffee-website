import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "About Coffee - Blog";
  }, []);

  return (
    <>
      <h1>Blog</h1>
    </>
  );
};

export default Blog;
