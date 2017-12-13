import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="container">
      <div className="jumbotron text-center welcome-header">
        <h1>Welcome {props.user.battletag}</h1>
        <hr/>
        <h4>Please enter the BattleTag and select the region to complete the search</h4>
        <h5>The BattleTag must be in "battletag-number" format</h5>
      </div>
    </div>
  )
};

export default Header;
