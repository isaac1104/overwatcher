import React, {Component} from "react";
import Navbar from "./../UserPage/Navbar/Navbar";
import Header from "./Header/Header";
import API from "./../../utils/API";

class ComparePage extends  Component {
  state = {
    battleTag1: "",
    battleTag2: ""
  }

  handleInputOne = (event) => {
    this.setState({battleTag1: event.target.value});
  }

  handleInputTwo = (event) => {
    this.setState({battleTag2: event.target.value});
  }

  handleButtonClick = () => {
    console.log(this.state.battleTag1, this.state.battleTag2);
  }

  handleFormSubmit = (event) => {
    this.setState({battleTag1: "", battleTag2: ""});
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Header handleInputOne={this.handleInputOne} handleInputTwo={this.handleInputTwo} handleButtonClick={this.handleButtonClick} handleFormSubmit={this.handleFormSubmit} battleTag1={this.state.battleTag1} battleTag2={this.state.battleTag2}/>
      </div>
    )
  }
}

export default ComparePage;
