import React, { Component } from "react";
import _ from "lodash";
import StreamList from "./../components/StreamPage/StreamList/StreamList";
import Header from "./../components/StreamPage/Header/Header";
import { connect } from "react-redux";
import * as actions from "./../actions";

class StreamContainer extends Component {

  componentWillUnmount() {
    this.props.destoryTwitchData();
  }

  componentDidMount() {
    this.props.getTwitchData();
    this.props.getTwitchMetaData();
  }

  renderStreams = () => {
    const mergedData = _.merge(this.props.twitchData, this.props.twitchMetaData);
    if (this.props.filter === "All") {
      return mergedData.map((data) => {
        return (
          <StreamList thumbnail_url={data.thumbnail_url} title={data.title} started_at={data.started_at} viewer_count={data.viewer_count} mergedData={data}/>
        )
      });
    } else {
      return mergedData.filter((data) => {
        if (data.overwatch && data.overwatch.broadcaster.hero) {
          return data.overwatch.broadcaster.hero.role === this.props.filter
        }
      }).map((stream) => {
        return (
          <StreamList thumbnail_url={stream.thumbnail_url} title={stream.title} started_at={stream.started_at} viewer_count={stream.viewer_count} mergedData={stream}/>
        )
      });
    }
  }

  render() {
    return (
      <div>
        <Header filterStream={this.props.filterStream}/>
        {this.renderStreams()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    twitchData: state.twitchData,
    twitchMetaData: state.twitchMetaData,
    filter: state.filter
  }
}

export default connect(mapStateToProps, actions)(StreamContainer);
