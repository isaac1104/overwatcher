import React, {Component} from "react";
import Header from "./Header";
import API from "./../utils/API";

class App extends Component {
  state = {
    battleTag: "",
    region: ""
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

  greet = () => {
    if (this.state.battleTag.length <= 0) {
      return (
        <h3>Please enter your BattleTag and select the region below</h3>
      )
    } else {
      return(
        <h3>Welcome, {this.state.battleTag}</h3>
      )
    }
  }

  getStatData = () => {
    if (this.state.battleTag !== "" && this.state.region !== "") {
      API.getStatData(this.state.battleTag).then((res) => {
        if (res.data[this.state.region] === null) {
          alert(`Please select different region for ${this.state.battleTag}`);
        } else {
          console.log(res.status);
          console.log(res.data[this.state.region]);
        }
      }).catch((err) => {
        console.log(err);
        alert(`Invalid BattleTag. Please try again.`);
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Header battleTag={this.state.battleTag} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleSelectChange={this.handleSelectChange} getStatData={this.getStatData} region={this.state.region} greet={this.greet}/>
      </div>
    )
  }
};

export default App;
