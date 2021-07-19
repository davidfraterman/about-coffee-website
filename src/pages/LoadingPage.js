import { useEffect } from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  useEffect(() => {
    document.title = "Loading";
  }, []);

  return (
    <div className="loading-wrapper">
      <div className="loader"></div>{" "}
    </div>
  );
};

export default LoadingPage;
