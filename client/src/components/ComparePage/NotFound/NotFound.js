import React from "react";
import { Image } from "semantic-ui-react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="jumbotron text-center not-found-header">
        <Image
          src="/images/misc/reaper.png"
          style={{width: "10rem"}}
          centered
        />
        <h1>Error: One of more players not found!</h1>
        <h3>Please be sure to input two valid Battletags</h3>
        <h5>Two compared players must have played at least one competitive game</h5>
      </div>
    </div>
  )
};

export default NotFound;
