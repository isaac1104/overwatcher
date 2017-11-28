import React from "react";
import SearchHeroes from "./SearchHeroes";
// import Heroes from "./../../../utils/Heroes";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="container">
      <div className="jumbotron text-center streamer-search-container">
        <h1>Stream</h1>
        <hr/>
        <h3>Check out all the streamers who are playing Overwatch</h3>
        <input type="text" onChange={props.handleInputChange} value={props.search} autoComplete="off" className="form-control streamer-search-bar" placeholder="search for overwatch streamer"/>
        <h5>search streamers by heroes</h5>
        <SearchHeroes mergedData={props.mergedData}/>
      </div>
    </div>
  )
};

export default Search;
