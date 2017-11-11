import React from "react";
import Search from "./../Search/Search";
import "./Navbar.css";

const Navbar = (props) => {
  return(
    <nav className="navbar navbar-top navbar-dark bg-dark" id="nav">
      <div id="logo-section">
        <a className="navbar-brand" href="/"><img src="/images/owlogo.svg" className="logo" alt="owlogo"/></a>
        <h2>OVERWATCH STATS</h2>
      </div>
      <div>
        {props.renderLoadingGif}
      </div>
      <div>
        <Search getStatData={props.getStatData} handleFormSubmit={props.handleFormSubmit} handleInputChange={props.handleInputChange} handleSelectChange={props.handleSelectChange} battleTag={props.battleTag} region={props.region}/>
      </div>
      </nav>
  )
};

export default Navbar;
