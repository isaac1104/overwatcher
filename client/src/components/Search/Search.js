import React from "react";
import "./Search.css";

const Search = (props) => {
  return(
    <form onSubmit={props.handleFormSubmit}>
      <input onChange={props.handleInputChange} type="text" value={props.battleTag} id="search-box" className="form-control" autoComplete="off"/>
      <select value={props.region} onChange={props.handleSelectChange} className="form-control">
        <option value="us">US</option>
        <option value="eu">EU</option>
        <option value="kr">KR</option>
      </select>
      <button onClick={()=> props.getStatData()} type="submit" className="btn btn-danger btn-md">Search</button>
    </form>
  )
};

export default Search;
