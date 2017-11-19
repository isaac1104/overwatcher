import React, {Component} from "react";
import Navbar from "./../UserPage/Navbar/Navbar";
import Header from "./Header/Header";
import API from "./../../utils/API";

class ComparePage extends  Component {
  state = {
    battleTag1: "",
    battleTag2: "",
    region: "us",
    player1Found: "",
    player2Found: "",
    result1: [],
    result2: []
  }

  handleInputOne = (event) => {
    this.setState({battleTag1: event.target.value});
  }

  handleInputTwo = (event) => {
    this.setState({battleTag2: event.target.value});
  }

  handleFormSubmit = (event) => {
    this.setState({battleTag1: "", battleTag2: ""});
    event.preventDefault();
  }

  getStatData = () => {
    if (this.state.battleTag1 && this.state.battleTag2 && this.state.region) {
      API.getStatData(this.state.region, this.state.battleTag1).then((res) => {
        if (res.data.error || !res.data.competitiveStats.careerStats) {
          this.setState({playerFound: false});
        } else {
          this.setState({
            result1: res.data,
            player1Found: true
          });
        }
      }).catch((err) => {
        if (err) {
          console.log(err);
          this.setState({player1Found: false});
        }
      });
      API.getStatData(this.state.region, this.state.battleTag2).then((res) => {
        if (res.data.error || !res.data.competitiveStats.careerStats) {
          this.setState({playerFound: false});
        } else {
          this.setState({
            result2: res.data,
            player2Found: true
          });
        }
      }).catch((err) => {
        if (err) {
          console.log(err);
          this.setState({player2Found: false});
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Header handleInputOne={this.handleInputOne} handleInputTwo={this.handleInputTwo} handleFormSubmit={this.handleFormSubmit} battleTag1={this.state.battleTag1} battleTag2={this.state.battleTag2} getStatData={this.getStatData}/>
      </div>
    )
  }
}

export default ComparePage;
