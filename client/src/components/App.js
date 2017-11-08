import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import DataView from "./Data/DataView";
import API from "./../utils/API";

class App extends Component {
  state = {
    battleTag: "",
    region: "",
    result: [],
    heroesResult: []
  }

  componentDidMount() {
    this.setState({battleTag: "", region: "us"});
  }

  handleInputChange = (event) => {
    this.setState({battleTag: event.target.value});
  }

  handleSelectChange = (event) => {
    this.setState({region: event.target.value});
  }

  handleFormSubmit = (event) => {
    console.log(this.state.region);
    event.preventDefault();
  }

  getStatData = () => {
    if (this.state.battleTag !== "" && this.state.region !== "") {
      API.getStatData(this.state.battleTag).then((res) => {
        if (res.data[this.state.region] === null) {
          alert(`Please select different region for ${this.state.battleTag}`);
        } else {
          console.log(res.status);
          this.setState({
            result: res.data[this.state.region].stats.competitive.overall_stats
          });
        }
      }).catch((err) => {
        console.log(err);
        alert(`Invalid BattleTag. Please try again.`);
      });
    }
    API.getHeroData(this.state.battleTag).then((res) => {
      console.log(res.data[this.state.region]);
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar battleTag={this.state.battleTag} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleSelectChange={this.handleSelectChange} getStatData={this.getStatData} region={this.state.region} greet={this.greet}/>
          <Route exact path="/home" component={Header}/>
          <Route exact path="/" component={Header}/>
          <Route exact path="/search" component={DataView}/>
          <DataView result={this.state.result} battleTag={this.state.battleTag}/>
        </div>
      </Router>
    )
  }
};

export default App;
