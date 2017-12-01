import React, { Component } from "react";
import _ from "lodash";
import StreamList from "./../components/StreamPage/StreamList/StreamList";
import Header from "./../components/StreamPage/Header/Header";
import SearchRole from "./../components/StreamPage/Search/SearchRole";
import { connect } from "react-redux";
import * as actions from "./../actions";

class StreamContainer extends Component {

  componentDidMount() {
    this.props.getTwitchData();
    this.props.getTwitchMetaData();
  }

  render() {
    const mergedData = _.merge(this.props.twitchData, this.props.twitchMetaData);
    return (
      <div className="container">
        <div>
          <Header filterStream={this.props.filterStream}/>
          {mergedData.filter((data) => {
            if (data.overwatch && data.overwatch.broadcaster.hero) {
              return data.overwatch.broadcaster.hero.role === this.props.filter
            }
          }).map((stream) => {
            return (
              <StreamList thumbnail_url={stream.thumbnail_url} title={stream.title} started_at={stream.started_at} viewer_count={stream.viewer_count} mergedData={stream}/>
            )
          })}
        </div>
      </div>
    )
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
