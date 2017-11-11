import React from "react";
import "./Header.css";

const Header = (props) => {
  if (props.playerFound === false) {
    return (
      <h1>Player not found</h1>
    )
  }
  else {
    return (
      <div className="container">
        <div className="jumbotron text-center header">
          <h3>Overwatch Stats with React</h3>
          <hr/>
          <h5>Please enter your BattleTag and select the region</h5>
        </div>
      </div>
    )
  }
};

export default Header;
