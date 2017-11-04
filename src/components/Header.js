import React from "react";
import Search from "./Search";

const Header = (props) => {

  const greet = () => {
    if (props.battleTag.length <= 0) {
      return (
        <h3>Please enter your BattleTag below</h3>
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
      <Search handleFormSubmit={props.handleFormSubmit} handleInputChange={props.handleInputChange} battleTag={props.battleTag}/>
    </div>
  )
};

export default Header;
