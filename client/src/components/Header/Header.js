import React from "react";
import "./Header.css";

const Header = (props) => {
  if (props.playerFound === false) {
    return (
      <div className="container error-header">
        <div className="jumbotron">
          <h1>Player not found</h1>
        </div>
      </div>
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
