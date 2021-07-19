import { useEffect } from "react";
import "./LoadingPage.css";

// import loadingSpinner from "../images/loading-buffering.gif";

const LoadingPage = () => {
  useEffect(() => {
    document.title = "Loading";
  }, []);

  return (
    <div className="loading-wrapper">
      {/* <img className="loading-spinner" src={loadingSpinner} alt="Loading" /> */}
      <div className="loader"></div>{" "}
    </div>
  );
};

export default LoadingPage;
