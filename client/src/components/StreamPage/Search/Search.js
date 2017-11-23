import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="container streamer-search-container">
      <input type="text" onChange={props.handleInputChange} value={props.search} autoComplete="off" id="streamer-search" placeholder="search for overwatch streamer"/>
    </div>
  )
};

export default Search;
