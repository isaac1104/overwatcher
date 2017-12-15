import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <Link to="/logout">
      <Button animated basic inverted color="grey" size="mini">
        <Button.Content visible>LOGOUT</Button.Content>
        <Button.Content hidden>
          <Icon name="log out"/>
        </Button.Content>
      </Button>
    </Link>
  )
}

export default Logout;
