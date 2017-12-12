import React from "react";
import { Button } from "semantic-ui-react";
import "./LoginBtn.css";

const LoginBtn = () => {
  return (
    <a href="/auth/bnet">
      <Button
        animated
        basic
        inverted
        color="black"
        size="large"
      >
        <Button.Content visible>
          <img
            src="/images/misc/bnet-logo.png"
            alt="bnet-logo"
          className="img-responsive bnet-logo"/>
        </Button.Content>
        <Button.Content hidden>SIGN-IN</Button.Content>
      </Button>
    </a>
  )
};

export default LoginBtn;
