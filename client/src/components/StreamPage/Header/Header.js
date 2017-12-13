import React from "react";
import { Header as PageHeader, Icon } from "semantic-ui-react";
import SearchRole from "./../../StreamPage/Search/SearchRole";
import "./Header.css";

const Header = (props) => {

  const style = {
    subheader: {
      color: "white"
    },
    header: {
      color: "white",
      padding: "5%"
    }
  }

  return (
    <PageHeader
      as="h1"
      icon
      textAlign="center"
      className="streamer-search-container"
      style={style.header}
    >
      <Icon name="tv"/>
      Stream
      <hr/>
      <PageHeader.Subheader style={style.subheader}>
        Check out the streamers who are currently streaming Overwatch
        <SearchRole filterStream={props.filterStream}/>
      </PageHeader.Subheader>
    </PageHeader>
  )
};

export default Header;
