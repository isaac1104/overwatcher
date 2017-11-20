import React from "react";
import Search from "./../Search/Search";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="container">
      <div className="jumbotron text-center compare-page-header">
        <h1>Enter two different players for comparison</h1>
        <h3>Please make sure that the Battletags are valid</h3>
        <Search {...props}/>
      </div>
    </div>
  )
};

export default Header;
