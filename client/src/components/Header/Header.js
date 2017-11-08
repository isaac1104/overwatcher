import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="jumbotron text-center header">
        <h1>Overwatch Stats with React</h1>
        <h3>Please enter your BattleTag and select the region</h3>
      </div>
    </div>
  )
};

export default Header;
