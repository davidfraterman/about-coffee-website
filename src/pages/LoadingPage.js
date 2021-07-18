import { useEffect } from "react";
import "./LoadingPage.css";

import loadingSpinner from "../images/loading-buffering.gif";

const LoadingPage = () => {
  useEffect(() => {
    document.title = "Loading";
  }, []);

  return (
    <div className="loading-wrapper">
      <img src={loadingSpinner} alt="Loading" width="15%" />
    </div>
  );
};

export default LoadingPage;
