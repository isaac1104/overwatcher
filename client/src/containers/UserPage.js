import React, { Component } from "react";
import Header from "./../components/UserPage/Header/Header";
import { connect } from "react-redux";
import * as actions from "./../actions";

class UserPage extends Component {

  componentDidMount() {
    this.props.fetchSignedInBattleTag();
  }

  render() {
    return (
      <Header user={this.props.user}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    statsData: state.statsData,
    user: state.user
  }
}

export default connect(mapStateToProps, actions)(UserPage);
