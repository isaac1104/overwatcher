import React from "react";
import Search from "./../Search/Search";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="container">
      <div className="jumbotron text-center compare-page-header">
        <h1>Compare</h1>
        <hr/>
        <h4>Please input valid Battletags below</h4>
        <h5>Both players must have played at least one competitve game</h5>
        <Search {...props}/>
      </div>
    </div>
  )
};

export default Header;
