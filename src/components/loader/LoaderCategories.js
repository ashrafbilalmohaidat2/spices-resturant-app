import React from "react";
import "./LoaderCategories.css";
const LoaderCategories = () => {
    return(
      <div id="container">
        <span className="loading-circle sp1">
          <span className="loading-circle sp2">
            <span className="loading-circle sp3"></span>
          </span>
        </span>
      </div>
    )
}

export default LoaderCategories;