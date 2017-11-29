import React from "react";
import SearchRole from "./../Search/SearchRole";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="container">
      <div className="jumbotron text-center streamer-search-container">
        <h1>Stream</h1>
        <hr/>
        <h3>Check out all the streamers who are playing Overwatch</h3>
        <h5>Filter by currently playing role</h5>
        <SearchRole mergedData={props.mergedData}/>
      </div>
    </div>
  )
};

export default Header;
