import React from "react";
import Search from "./../Search/Search";
import { Header as PageHeader, Icon } from "semantic-ui-react";

const Header = (props) => {

  const style = {
    subheader: {
      color: "white"
    },
    header: {
      color: "white",
      padding: "5%",
      backgroundColor: "#353b40"
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
        Compare
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
