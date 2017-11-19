import React, {Component} from "react";
import Navbar from "./../UserPage/Navbar/Navbar";
import Header from "./Header/Header";
import API from "./../../utils/API";

class ComparePage extends  Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
      </div>
    )
  }
}

export default ComparePage;
