import React, {Component} from "react";
import Navbar from "./../UserPage/Navbar/Navbar";
import Header from "./Header/Header";
import DataView from "./Data/DataView";
import NotFound from "./NotFound/NotFound";
import API from "./../../utils/API";

class ComparePage extends  Component {
  state = {
    battleTag1: "",
    battleTag2: "",
    region: "us",
    player1Found: "",
    player2Found: "",
    result1: [],
    result2: [],
    renderLoading: false
  }

  handleInputOne = (event) => {
    this.setState({battleTag1: event.target.value});
  }

  handleInputTwo = (event) => {
    this.setState({battleTag2: event.target.value});
  }

  handleFormSubmit = (event) => {
    this.setState({battleTag1: "", battleTag2: "", renderLoading: true});
    event.preventDefault();
  }

  getStatData = () => {
    if (this.state.battleTag1 && this.state.battleTag2 && this.state.region) {
      API.getStatData(this.state.region, this.state.battleTag1).then((res) => {
        if (res.data.error || !res.data.competitiveStats.careerStats) {
          this.setState({player1Found: false});
        } else {
          this.setState({
            result1: res.data,
            player1Found: true,
            renderLoading:false
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
          this.setState({player2Found: false});
        } else {
          this.setState({
            result2: res.data,
            player2Found: true,
            renderLoading:false
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

  showComparedStats = () => {
    if (this.state.player1Found && this.state.player2Found) {
      return (
        <DataView result1={this.state.result1} result2={this.state.result2} player1Found={this.state.player1Found} player2Found={this.state.player2Found}/>
      )
    } else if (this.state.player1Found !== "" && this.state.player2Found !== "") {
      return (
        <NotFound/>
      )
    }
  }

  loadingGif = () => {
    if (this.state.renderLoading) {
      return (
        <img src="/images/loading.gif" alt="loading-gif" className="img-responsive loading"/>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Header handleInputOne={this.handleInputOne} handleInputTwo={this.handleInputTwo} handleFormSubmit={this.handleFormSubmit} battleTag1={this.state.battleTag1} battleTag2={this.state.battleTag2} getStatData={this.getStatData} loadingGif={this.loadingGif} player1Found={this.state.player1Found} player2Found={this.state.player2Found}/>
        {this.showComparedStats()}
      </div>
    )
  }
}

export default ComparePage;
