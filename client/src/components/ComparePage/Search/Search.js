import React from "react";
import { Input } from "semantic-ui-react";
import { Button as Btn, Icon } from "semantic-ui-react";
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
        <Btn
          onClick={() => props.getStatData()}
          animated
          basic inverted color="grey"
          size="mini"
          type="submit"
        >
          <Btn.Content visible>COMPARE</Btn.Content>
          <Btn.Content hidden>
            <Icon name="users"/>
          </Btn.Content>
        </Btn>
      </form>
      {props.loadingGif()}
    </div>
  )
};

export default Button;
