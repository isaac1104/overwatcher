import React from "react";
import Search from "./../Search/Search";

const Navbar = (props) => {
  return(
    <nav className="navbar navbar-top navbar-dark bg-dark">
      <a className="navbar-brand" to="/home" href="/home">Overwatch Stats with React</a>
      <Search getStatData={props.getStatData} handleFormSubmit={props.handleFormSubmit} handleInputChange={props.handleInputChange} handleSelectChange={props.handleSelectChange} battleTag={props.battleTag} region={props.region}/>
    </nav>
  )
};

export default Navbar;
