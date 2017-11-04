import React from "react";
import Search from "./Search";

const Header = (props) => {

  const greet = () => {
    if (props.battleTag.length <= 0) {
      return (
        <h3>Please enter your BattleTag and select the region below</h3>
      )
    } else {
      return(
        <h3>Welcome, {props.battleTag}</h3>
      )
    }
  }

  return (
    <div className="jumbotron text-center">
      <h1>Overwatch Stats with React</h1>
      {greet()}
      <Search getStatData={props.getStatData} handleFormSubmit={props.handleFormSubmit} handleInputChange={props.handleInputChange} handleSelectChange={props.handleSelectChange} battleTag={props.battleTag} region={props.region}/>
    </div>
  )
};

export default Header;
