import React from "react";
import "./../UserPage/Header/Header.css";

const PlayerNotFound = () => {
  return (
    <div className="container">
      <div className="jumbotron error-header text-center">
        <h1>Error: Stats/Player Not Found!</h1>
        <hr/>
        <h3>Please check the BattleTag again or selected region for this player</h3>
        <h4>The search must be in "battletag-number" format</h4>
        <h5>Ex)sinatraa-11809</h5>
      </div>
    </div>
  );
}

export default PlayerNotFound;
