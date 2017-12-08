import React, { Component } from "react";
import AvatarData from "./../components/UserPage/Data/AvatarData";
import PlayerStats from "./../components/UserPage/Data/PlayerStats";
import DetailedData from "./../components/UserPage/Data/DetailedData";
import HeroesData from "./../components/UserPage/Data/HeroesData";
import SubData from "./../components/UserPage/Data/SubData";
import Navbar from "./../components/Navbar/Navbar";
import { connect } from "react-redux";
import * as actions from "./../actions";
import "./../components/UserPage/Data/Data.css";

class DataView extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>
          <AvatarData statsData={this.props.statsData}/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <PlayerStats statsData={this.props.statsData}/>
              <SubData statsData={this.props.statsData}/>
              <DetailedData statsData={this.props.statsData}/>
            </div>
            <div className="col-md-7">
              <HeroesData statsData={this.props.statsData}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    statsData: state.statsData,
  }
}

export default connect(mapStateToProps, actions)(DataView);
