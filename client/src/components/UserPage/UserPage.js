import React, {Component} from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import DataView from "./Data/DataView";
import API from "./../../utils/API";
import { connect } from "react-redux";
import * as actions from "./../../actions";

class UserPage extends Component {
  state = {
    battleTag: "",
    region: "us",
    renderView: false,
    renderLoading: false,
    playerFound: "",
    signedInUser: "",
    result: [],
    page: "search"
  }

  componentDidMount() {
    this.loadSavedUsers();
    this.loadSignedInUser();
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
    if (this.state.renderView === false || this.state.playerFound === false) {
      return (
        <Header playerFound={this.state.playerFound} signedInUser={this.state.signedInUser}/>
      )
    } else {
      console.log("player found");
      return (
        <DataView result={this.state.result} battleTag={this.state.battleTag}/>
      )
    }
  }

  renderLoadingGif = () => {
    if (this.state.renderLoading === false) {
      return(
        <div></div>
      )
    } else {
      return (
        <img src="/images/misc/loading.gif" className="img-responsive loading" alt="loading"/>
      )
    }
  }

  getStatData = (username) => {
    if (this.state.battleTag !== "" && this.state.region !== "") {
      API.getStatData(this.state.region, this.state.battleTag).then((res) => {
        if (res.data.error || !res.data.competitiveStats.careerStats) {
          this.setState({renderLoading: false, playerFound: false});
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
      API.saveUsers({username: this.state.signedInUser}).then((res) => {
        this.loadSavedUsers();
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  loadSavedUsers = () => {
    API.getSavedUsers().then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  loadSignedInUser = () => {
    API.getSignedInUser().then((res) => {
      this.setState({signedInUser: res.data.battletag});
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    // console.log(this.props.statsData);
    return (
      <div>
        <Navbar battleTag={this.state.battleTag} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleSelectChange={this.handleSelectChange} getStatData={this.getStatData} region={this.state.region} page={this.state.page} renderLoadingGif={this.renderLoadingGif()} getStatsData={this.props.getStatsData}/>
        {this.renderDataView()}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    statsData: state.statsData
  }
}

export default connect(mapStateToProps, actions)(UserPage);
// export default UserPage;
