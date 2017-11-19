import React from "react";
import Button from "./../Button/Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="jumbotron text-center compare-page-header">
        <h1>Enter two different players for comparison</h1>
        <h3>Player 1</h3>
        <input type="text"></input>
        <h3>Player 2</h3>
        <input type="text"></input>
        <Button/>
      </div>
    </div>
  )
};

export default Header;
