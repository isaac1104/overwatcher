import React from "react";
import { Header as PageHeader, Image } from "semantic-ui-react";

const Header = (props) => {

  const style = {
    subheader: {
      color: "white",
      marginTop: "2rem"
    },
    header: {
      color: "white",
      padding: "5%",
      background: "#343a40"
    },
    welcome: {
      color: "white",
      fontSize: "3rem",
      fontWeight: "bold"
    },
    logo: {
      width: "10rem"
    }
  }

  return (
    <div>
      <PageHeader
        as="h1"
        textAlign="center"
        style={style.header}
      >
        <Image src="/images/misc/owlogo.svg" style={style.logo}/>
        <PageHeader.Subheader style={style.welcome}>
          Welcome {props.user.battletag}
        </PageHeader.Subheader>
        <hr/>
        <PageHeader.Subheader style={style.subheader}>
          Please enter the Battetag to start the search
        </PageHeader.Subheader>
        <PageHeader.Subheader style={style.subheader}>
          Battletag must be in "battletag-number" format
        </PageHeader.Subheader>
      </PageHeader>
    </div>
  )
};

export default Header;
