import React, { Component } from "react";
import _ from "lodash";
import StreamList from "./../components/StreamPage/StreamList/StreamList";
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
        <SearchRole filterByRole={this.filterByRole}/>
        <div>
          {mergedData.map((data) => {
            return (
              <StreamList thumbnail_url={data.thumbnail_url} title={data.title} started_at={data.started_at} viewer_count={data.viewer_count} mergedData={data}/>
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
    twitchMetaData: state.twitchMetaData
  }
}

export default connect(mapStateToProps, actions)(StreamContainer);
