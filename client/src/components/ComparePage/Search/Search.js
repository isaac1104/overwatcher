import React from "react";

const Button = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div>
        Player 1 <input onChange={props.handleInputOne} value={props.battleTag1} type="text"/>
      </div>
      <div>
        Player 2 <input onChange={props.handleInputTwo} value={props.battleTag2} type="text"/>
      </div>
      <button onClick={() => props.getStatData()} className="btn btn-primary btn-md">compare</button>
    </form>
  )
};

export default Button;
