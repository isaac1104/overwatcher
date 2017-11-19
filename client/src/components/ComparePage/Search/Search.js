import React from "react";

const Button = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      Player 1 <input onChange={props.handleInputOne} value={props.battleTag1} type="text"/>
      Player 2 <input onChange={props.handleInputTwo} value={props.battleTag2} type="text"/>
      <button onClick={() => props.handleButtonClick()} className="btn btn-primary btn-md">compare</button>
    </form>
  )
};

export default Button;
