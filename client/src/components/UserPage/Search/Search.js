import React from "react";
import "./Search.css";

const Search = (props) => {
  return(
      <div>
        <input onChange={props.handleInputChange} type="text" value={props.battleTag} id="search-box" autoComplete="off" placeholder="battletag-number" className="form-control mr-sm-2"/>
        <select value={props.region} onChange={props.handleSelectChange} className="region-select">
          <option value="us">US</option>
          <option value="eu">EU</option>
          <option value="kr">KR</option>
        </select>
        <button onClick={()=> props.getStatData()} type="submit" className="btn btn-outline-success btn-lg my-2 my-sm-0">search</button>
        <button className="btn btn-outline-danger btn-lg"><a href="/logout">logout</a></button>
      </div>
  )
};

export default Search;
