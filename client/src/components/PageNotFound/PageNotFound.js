import React from "react";
import { Header as PageHeader, Image } from "semantic-ui-react";

const PageNotFound = () => {

  const style = {
    subheader: {
      color: "white",
      marginTop: "2rem"
    },
    header: {
      color: "white",
      padding: "5%",
      background: "#333333"
    },
    error: {
      color: "red",
      fontSize: "3rem",
      fontWeight: "bolder"
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
          Error: 404 Page Not Found!
        </PageHeader.Subheader>
        <hr/>
        <PageHeader.Subheader style={style.subheader}>
          The page you were trying to navigate to is not found
        </PageHeader.Subheader>
        <PageHeader.Subheader style={style.subheader}>
          Please choose the directories from the navbar above
        </PageHeader.Subheader>
      </PageHeader>
    </div>
  );
}

export default PageNotFound;
