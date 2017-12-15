import React from "react";
import { Button, Image } from "semantic-ui-react";

const LoginBtn = () => {
  return (
    <a href="/auth/bnet">
      <Button
        animated
        basic
        inverted
        color="teal"
        size="large"
      >
        <Button.Content visible>
          <Image
            src="/images/misc/bnet-logo.png"
            size="tiny"
            alt="bnet-logo"
            className="img-responsive bnet-logo"
          />
        </Button.Content>
        <Button.Content hidden>SIGN-IN</Button.Content>
      </Button>
    </a>
  )
};

export default LoginBtn;
