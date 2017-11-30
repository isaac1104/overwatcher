import React, { Component } from "react";
import Navbar from "./../UserPage/Navbar/Navbar";
// import StreamContainer from "./StreamContainer/StreamContainer";
import { connect } from 'react-redux';
import * as actions from '../../actions';


class StreamPage extends Component {

 componentDidMount() {
   this.props.getTwitchData();
 }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <Navbar/>
        {/* <StreamContainer result={this.state.result} metaResult={this.state.metaResult} search={this.state.search}/> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}


export default connect(mapStateToProps, actions)(StreamPage);
