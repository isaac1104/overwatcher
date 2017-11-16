import React from "react";
import LoginBtn from "./../Navbar/LoginBtn";
import "./Search.css";

const Search = (props) => {
  return(
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <input onChange={props.handleInputChange} type="text" value={props.battleTag} id="search-box" autoComplete="off" placeholder="battletag-number"/>
        <select value={props.region} onChange={props.handleSelectChange}>
          <option value="us">US</option>
          <option value="eu">EU</option>
          <option value="kr">KR</option>
        </select>
        <button onClick={()=> props.getStatData()} type="submit" className="btn btn-success btn-md">search</button>
        <button className="btn btn-danger btn-md"><a href="/logout">logout</a></button>
      </form>
    </div>
  )
};

export default Search;
