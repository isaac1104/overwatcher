import React from "react";
import SearchHeroes from "./SearchHeroes";
import Heroes from "./../../../utils/Heroes";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="container streamer-search-container">
      <div className="jumbotron text-center">
        <input type="text" onChange={props.handleInputChange} value={props.search} autoComplete="off" className="form-control" placeholder="search for overwatch streamer"/>
        <div className="streamer-hero-search-container">
          {Heroes.map((hero) => {
            return (
              <SearchHeroes name={hero.name} image={hero.image}/>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default Search;
