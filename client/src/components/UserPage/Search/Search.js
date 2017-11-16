import React from "react";
import "./Search.css";

const Search = (props) => {
  return(
      <form onSubmit={props.handleFormSubmit} className="form-lnline my-2 my-lg-0">
        <input onChange={props.handleInputChange} type="text" value={props.battleTag} id="search-box" autoComplete="off" placeholder="battletag-number" className="form-control mr-sm-2"/>
        <select value={props.region} onChange={props.handleSelectChange}>
          <option value="us">US</option>
          <option value="eu">EU</option>
          <option value="kr">KR</option>
        </select>
        <button onClick={()=> props.getStatData()} type="submit" className="btn btn-success btn-md">search</button>
        <button className="btn btn-danger btn-md"><a href="/logout">logout</a></button>
      </form>
  )
};

export default Search;
