import React, { Component } from "react";
import _ from "lodash";
import Navbar from "./../components/UserPage/Navbar/Navbar";
import StreamContainer from "./../components/StreamPage/StreamContainer/StreamContainer";
import { connect } from "react-redux";
import * as actions from "./../actions";


class StreamPage extends Component {

 componentDidMount() {
   this.props.getTwitchData();
   this.props.getTwitchMetaData();
 }

  render() {
    const mergedData = _.merge(this.props.twitchData, this.props.twitchMetaData);
    return (
      <div>
        <Navbar/>
        <StreamContainer mergedData={mergedData}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    twitchData: state.twitchData,
    twitchMetaData: state.twitchMetaData
  }
}

export default connect(mapStateToProps, actions)(StreamPage);
