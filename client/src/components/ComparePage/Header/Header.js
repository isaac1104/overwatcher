import React from "react";
import Search from "./../Search/Search";
import { Header as PageHeader, Icon } from "semantic-ui-react";

const Header = (props) => {

  const style = {
    subheader: {
      color: "white",
      marginTop: "1rem"
    },
    header: {
      color: "white",
      padding: "5%",
      backgroundColor: "#343a40"
    }
  }

  return (
    <div className="container">
      <PageHeader
        as="h1"
        icon
        textAlign="center"
        style={style.header}
      >
        <Icon name="users"/>
        COMPARE
        <hr/>
        <PageHeader.Subheader style={style.subheader}>
          Please input valid Battletags for comparison
        </PageHeader.Subheader>
        <PageHeader.Subheader style={style.subheader}>
          Both players must have played at least one competitive game
        </PageHeader.Subheader>
      </PageHeader>
      <Search {...props}/>
    </div>
  )
};

export default Header;
