import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="container streamer-search-container">
      <div className="jumbotron text-center">
        <input type="text" onChange={props.handleInputChange} value={props.search} autoComplete="off" id="streamer-search" placeholder="search for overwatch streamer"/>
      </div>
    </div>
  )
};

export default Search;
