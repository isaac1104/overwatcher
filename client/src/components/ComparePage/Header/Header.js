import React from "react";
import Search from "./../Search/Search";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="container">
      <div className="jumbotron text-center compare-page-header">
        <h1>Enter two different players for comparison</h1>
        <Search {...props}/>
      </div>
    </div>
  )
};

export default Header;
