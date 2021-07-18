import { useEffect } from "react";
import Nav from "../components/mobile-nav/Nav";

const Blog = () => {
  useEffect(() => {
    document.title = "About Coffee - Blog";
  }, []);

  return (
    <>
      <Nav darkMode/>
      <h1>Blog</h1>
    </>
  );
};

export default Blog;
