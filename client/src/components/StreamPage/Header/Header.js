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
      <Icon name="video play"/>
      Stream
      <hr/>
      <PageHeader.Subheader style={style.subheader}>
        Check out the streamers who are currently streaming Overwatch
        <SearchRole filterStream={props.filterStream}/>
      </PageHeader.Subheader>
    </PageHeader>
    // <div>
    //   <div className="jumbotron text-center streamer-search-container">
    //     <h1>Stream</h1>
    //     <hr/>
    //     <h3>Check out all the streamers who are playing Overwatch</h3>
    //     <SearchRole filterStream={props.filterStream}/>
    //   </div>
    // </div>
  )
};

export default Header;
