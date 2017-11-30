import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="container">
      <div className="jumbotron text-center streamer-search-container">
        <h1>Stream</h1>
        <hr/>
        <h3>Check out all the streamers who are playing Overwatch</h3>
      </div>
    </div>
  )
};

export default Header;
