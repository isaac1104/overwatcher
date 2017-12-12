import React from "react";
import { Input } from "semantic-ui-react";
import "./Search.css";

const Button = (props) => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <div>
          Player 1
          <Input
            onChange={props.handleInputOne}
            value={props.battleTag1}
            icon="search"
            iconPosition="left"
            size="small"
            type="text"
            autoComplete="off"
            className="compare-search"
            placeholder="battletag-number"
          />
        </div>
        <div>
          Player 2
          <Input
            onChange={props.handleInputTwo}
            value={props.battleTag2}
            icon="search"
            iconPosition="left"
            size="small"
            type="text"
            autoComplete="off"
            className="compare-search"
            placeholder="battletag-number"
          />
        </div>
        <button onClick={() => props.getStatData()} className="btn btn-primary btn-md compare-btn">compare</button>
      </form>
      {props.loadingGif()}
    </div>
  )
};

export default Button;
