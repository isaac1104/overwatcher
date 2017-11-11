import React, {Component} from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import DataView from "./Data/DataView";
import API from "./../utils/API";

class App extends Component {
  state = {
    battleTag: "",
    region: "",
    renderView: false,
    renderLoading: false,
    playerFound: "",
    result: []
  }

  componentDidMount() {
    this.setState({battleTag: "", region: "us", renderView: false, renderLoading: false});
  }

  handleInputChange = (event) => {
    this.setState({battleTag: event.target.value});
  }

  handleSelectChange = (event) => {
    this.setState({region: event.target.value});
  }

  handleFormSubmit = (event) => {
    this.setState({renderLoading: true, battleTag: ""});
    event.preventDefault();
  }

  renderDataView = () => {
    if (this.state.renderView === false) {
      return (
        <Header/>
      )
    } else {
      return (<DataView result={this.state.result} battleTag={this.state.battleTag}/>)
    }
  }

  renderLoadingGif = () => {
    if (this.state.renderLoading === false) {
      return(
        <div></div>
      )
    } else {
      return (
        <div className="loading-container">
          <img src="images/loading.gif" className="img-responsive loading" alt="loading"/>
        </div>
      )
    }
  }

  renderNotFoundHeader = () => {
    if (this.state.playerFound === false) {
      return (
        <h1>Player not found</h1>
      )
    } else if (this.state.playerFound === true) {
      console.log("player found!");
    }
  }

  getStatData = () => {
    if (this.state.battleTag !== "" && this.state.region !== "") {
      API.getStatData(this.state.region, this.state.battleTag).then((res) => {
        if (res.data[this.state.region] === null) {
          alert(`Please select different region for ${this.state.battleTag}`);
        } else {
          this.setState({
            result: res.data,
            renderView: true,
            renderLoading: false,
            playerFound: true
          });
        }
      }).catch((err) => {
        if (err) {
          console.log(err);
          this.setState({renderLoading: false, playerFound: false});
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar battleTag={this.state.battleTag} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleSelectChange={this.handleSelectChange} getStatData={this.getStatData} region={this.state.region} greet={this.greet}/>
        {this.renderDataView()}
        {this.renderNotFoundHeader()}
        {this.renderLoadingGif()}
      </div>
    )
  }
};

export default App;
