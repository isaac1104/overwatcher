import React from "react";
import Navbar from "./../UserPage/Navbar/Navbar";
import Header from "./Header/Header";
import StreamContainer from "./../../containers/StreamContainer";

const StreamPage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <StreamContainer/>
    </div>
  )
}

export default StreamPage;
