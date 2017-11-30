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
    const mergedData = _.merge(this.props.data, this.props.metaData);
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
    data: state.data,
    metaData: state.metaData
  }
}

export default connect(mapStateToProps, actions)(StreamPage);
