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

  // filterByRole = () => {
  //   const mergedData = _.merge(this.props.twitchData, this.props.twitchMetaData);
  //   return mergedData.filter((data) => {
  //     if (data.overwatch && data.overwatch.broadcaster.hero) {
  //       return data.overwatch.broadcaster.hero.role === "Support"
  //     }
  //   }).map((stream) => {
  //     console.log(stream);
  //     return (
  //       <StreamList thumbnail_url={stream.thumbnail_url} title={stream.title} started_at={stream.started_at} viewer_count={stream.viewer_count} mergedData={stream}/>
  //     )
  //   });
  // }

  render() {
    const mergedData = _.merge(this.props.twitchData, this.props.twitchMetaData);
    // console.log(mergedData);
    // console.log(mergedData.filter((data) => {
    //   if (data.overwatch && data.overwatch.broadcaster.hero) {
    //     return data.overwatch.broadcaster.hero.role === "Support";
    //   }
    // }));
    console.log(this.props.filter);
    return (
      <div className="container">
        <div>
          <Header filterStream={this.props.filterStream}/>
          {/* {mergedData.map((data) => {
            return (
              <StreamList thumbnail_url={data.thumbnail_url} title={data.title} started_at={data.started_at} viewer_count={data.viewer_count} mergedData={data}/>
            )
          })} */}
          {/* {mergedData.filter((data) => {
            if (data.overwatch && data.overwatch.broadcaster.hero) {
              return data.overwatch.broadcaster.hero.role === "Offense"
            }
            }).map((stream) => {
            return (
              <StreamList thumbnail_url={stream.thumbnail_url} title={stream.title} started_at={stream.started_at} viewer_count={stream.viewer_count} mergedData={stream}/>
            )
          })}; */}
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