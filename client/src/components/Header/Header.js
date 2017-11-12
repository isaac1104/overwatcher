import React from "react";
import "./Header.css";

const Header = (props) => {
  if (props.playerFound === false) {
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
    )
  }
  else {
    return (
      <div className="container">
        <div className="jumbotron text-center header">
          <h1>Overwatch Stats Logger</h1>
          <h2>Your ultimate destination for Overwatch stats</h2>
          <hr/>
          <h3>Please enter your BattleTag and select the region</h3>
          <h4>The BattleTag must be in "battletag-number" format</h4>
        </div>
      </div>
    )
  }
};

export default Header;
