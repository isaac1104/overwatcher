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
    this.setState({region : event.target.value});
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
          console.log(res.data[this.state.region]);
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  }


  render() {
    return (
      <div className="container-fluid">
        <Header battleTag={this.state.battleTag}
          handleFormSubmit={this.handleFormSubmit}  handleInputChange={this.handleInputChange} handleSelectChange={this.handleSelectChange} getStatData={this.getStatData} region={this.state.region}/>
      </div>
    )
  }
};

export default App;
