import React from "react";
import { Header as PageHeader, Image } from "semantic-ui-react";

const PlayerNotFound = () => {

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
    error: {
      color: "red",
      fontSize: "3rem",
      fontWeight: "bold"
    },
    logo: {
      width: "10rem",
    }
  }

  return (
    <div className="container">
      <PageHeader
        as="h1"
        textAlign="center"
        style={style.header}
      >
        <Image src="/images/misc/reaper.png" style={style.logo}/>
        <PageHeader.Subheader style={style.error}>
          Error: Player Not Found!
        </PageHeader.Subheader>
        <hr/>
        <PageHeader.Subheader style={style.subheader}>
          Please double check the Battletag and search in "battletag-number" format
        </PageHeader.Subheader>
        <PageHeader.Subheader style={style.subheader}>
          The player you are searching for must have played at least one competitive game
        </PageHeader.Subheader>
      </PageHeader>
    </div>
  );
}

export default PlayerNotFound;
