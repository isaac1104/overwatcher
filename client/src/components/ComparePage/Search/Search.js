import React from "react";
import "./Search.css";

const Button = (props) => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <div>
          Player 1 <input onChange={props.handleInputOne} value={props.battleTag1} type="text" placeholder="battletag-number"/>
        </div>
        <div>
          Player 2 <input onChange={props.handleInputTwo} value={props.battleTag2} type="text" placeholder="battletag-number"/>
        </div>
        <button onClick={() => props.getStatData()} className="btn btn-primary btn-md">compare</button>
      </form>
      {props.loadingGif()}
    </div>
  )
};

export default Button;
