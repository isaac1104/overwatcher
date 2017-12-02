import React, {Component} from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import DataView from "./Data/DataView";
import { connect } from "react-redux";
import * as actions from "./../../actions";

class UserPage extends Component {

  renderDataView = () => {
    if (!this.props.statsData.renderDataView || !this.props.statsData.playerFound) {
      return (
        <Header playerFound={this.props.statsData.playerFound}/>
      )
    } else {
      return (
        <DataView statsData={this.props.statsData}/>
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar getStatsData={this.props.getStatsData} initStatsFetch={this.props.initStatsFetch} battletag={this.props.form} page={this.props.statsData.page} renderLoading={this.props.statsData.renderLoading}/>
        {this.renderDataView()}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    statsData: state.statsData,
    form: state.form
  }
}

export default connect(mapStateToProps, actions)(UserPage);
