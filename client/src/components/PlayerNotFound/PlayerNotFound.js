import React from "react";
import "./../UserPage/Header/Header.css";

const PlayerNotFound = () => {
  return (
    <div className="container">
      <div className="jumbotron error-header text-center">
        <h1>Error: Stats/Player Not Found!</h1>
        <hr/>
        <h3>Please double check the Battletag and input in "battletag-number" format</h3>
        <h4>The player you are searching for must have played at least one competitive game</h4>
        <h5>Ex)sinatraa-11809</h5>
      </div>
    </div>
  );
}

export default PlayerNotFound;
