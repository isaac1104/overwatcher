import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="jumbotron text-center not-found-header">
        <h1>Error: One of more players not found!</h1>
        <h3>Please be sure to input two valid Battletags</h3>
      </div>
    </div>
  )
};

export default NotFound;
