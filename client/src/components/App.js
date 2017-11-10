import React, {Component} from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import DataView from "./Data/DataView";
import API from "./../utils/API";
import LoadingGif from "./../images/loading.gif";

class App extends Component {
  state = {
    battleTag: "",
    region: "",
    renderView: false,
    renderLoading: false,
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
          <img src={LoadingGif} className="img-responsive loading" alt="loading"/>
        </div>
      )
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
            renderLoading: false
          });
        }
      }).catch((err) => {
        console.log(err);
        return alert(`Invalid BattleTag. Please try again.`);
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar battleTag={this.state.battleTag} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleSelectChange={this.handleSelectChange} getStatData={this.getStatData} region={this.state.region} greet={this.greet}/>
        {this.renderDataView()}
        {this.renderLoadingGif()}
      </div>
    )
  }
};

export default App;
