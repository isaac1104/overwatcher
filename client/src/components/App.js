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
    result: [],
    detailedResult: [],
    heroesResult: []
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
    this.setState({renderLoading: true});
    event.preventDefault();
  }

  renderDataView = () => {
    if (this.state.renderView === false) {
      return (
        <div></div>
      )
    } else {
      return (<DataView result={this.state.result} detailedResult={this.state.detailedResult} heroesResult={this.state.heroesResult} battleTag={this.state.battleTag}/>)
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
      API.getStatData(this.state.battleTag).then((res) => {
        if (res.data[this.state.region] === null) {
          alert(`Please select different region for ${this.state.battleTag}`);
        } else {
          console.log(res.status);
          this.setState({
            result: res.data[this.state.region].stats.competitive.overall_stats,
            detailedResult: res.data[this.state.region].stats.competitive.game_stats,
            renderView: true,
            renderLoading: false
          });
        }
      }).catch((err) => {
        console.log(err);
        alert(`Invalid BattleTag. Please try again.`);
      });
    }
    API.getHeroData(this.state.battleTag).then((res) => {
      this.setState({
        heroesResult: res.data[this.state.region].heroes.stats.competitive
      });
    }).catch((err) => {
      alert(`Too many requests. Please refresh the page and try again.`)
    });
  }

  render() {
    return (
      <div>
        <Navbar battleTag={this.state.battleTag} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleSelectChange={this.handleSelectChange} getStatData={this.getStatData} region={this.state.region} greet={this.greet}/>
        <Header/>
        {this.renderLoadingGif()}
        {this.renderDataView()}
      </div>
    )
  }
};

export default App;
