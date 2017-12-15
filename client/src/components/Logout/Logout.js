import React from "react";
import { Button, Icon } from "semantic-ui-react";

const Logout = () => {
  return (
    <a href="/logout">
      <Button animated basic inverted color="grey" size="mini">
        <Button.Content visible>LOGOUT</Button.Content>
        <Button.Content hidden>
          <Icon name="log out"/>
        </Button.Content>
      </Button>
    </a>
  )
}

export default Logout;
