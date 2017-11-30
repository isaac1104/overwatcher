import React, { Component } from "react";
import _ from "lodash";
import Navbar from "./../UserPage/Navbar/Navbar";
import StreamContainer from "./../../containers/StreamContainer";
import { connect } from "react-redux";
import * as actions from "./../../actions";

const StreamPage = () => {
  return (
    <div>
      <Navbar/>
      <StreamContainer/>
    </div>
  )
}

export default StreamPage;
