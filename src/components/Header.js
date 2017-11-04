import React from "react";
import Search from "./Search";

const Header = (props) => {
  return (
    <div className="jumbotron text-center">
      <h1>Overwatch Stats with React</h1>
      {props.greet()}
      <Search getStatData={props.getStatData} handleFormSubmit={props.handleFormSubmit} handleInputChange={props.handleInputChange} handleSelectChange={props.handleSelectChange} battleTag={props.battleTag} region={props.region}/>
    </div>
  )
};

export default Header;
