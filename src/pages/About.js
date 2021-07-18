import { useEffect } from "react";
import Nav from "../components/mobile-nav/Nav";

const About = () => {
  useEffect(() => {
    document.title = "About Coffee - About";
  }, []);
    
  return (
    <>
      <Nav color="#6C5E51" />

      <h1>Over ons</h1>
    </>
  );
};

export default About;
