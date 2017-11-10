import React from "react";
import Search from "./../Search/Search";
import "./Navbar.css";

const Navbar = (props) => {
  return(
    <nav className="navbar navbar-top navbar-dark bg-dark" id="nav">
      <a className="navbar-brand" href="/"><h3>OVERWATCH STATS</h3></a>
      <Search getStatData={props.getStatData} handleFormSubmit={props.handleFormSubmit} handleInputChange={props.handleInputChange} handleSelectChange={props.handleSelectChange} battleTag={props.battleTag} region={props.region}/>
    </nav>
  )
};

export default Navbar;
