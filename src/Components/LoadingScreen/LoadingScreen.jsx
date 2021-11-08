import "./LoadingScreen.css";

import React from "react";
import { Spinner } from "reactstrap";

const LoadingScreen = () => (
  <div className="loadingScreen">
    <Spinner className="loadingSpinner" />
    <p>Loading...</p>
  </div>
);

LoadingScreen.propTypes = {};

LoadingScreen.defaultProps = {};

export default LoadingScreen;
