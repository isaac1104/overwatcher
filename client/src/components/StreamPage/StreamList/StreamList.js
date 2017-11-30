import React, { Component } from "react";
import template from "url-template";
import "./StreamList.css";

class StreamList extends Component {
  render () {
    let parsedImg = template.parse(this.props.thumbnail_url).expand({ width: 320, height: 180 });

    const currentlyStreaming = () => {
      if (this.props.mergedData.overwatch && this.props.mergedData.overwatch.broadcaster.hero) {
        return (
          <div className="card-header stream-data-container">
            <div>
              <a href={channelURL}><img src={parsedImg} alt="thumbnail" className="img-responsive stream-thumbnail"/></a>
            </div>
            <div>
              <h1 id="channelName">{channelName}</h1>
              <h3>{this.props.title}</h3>
              <h5>Stream Started: {this.props.started_at}</h5>
              <h6>Viewer Count: {this.props.viewer_count}</h6>
              <h6 id="currentHero">Currently playing as: {this.props.mergedData.overwatch.broadcaster.hero.name.toLowerCase()}</h6>
              <h6>Role: {this.props.mergedData.overwatch.broadcaster.hero.role.toLowerCase()}</h6>
            </div>
          </div>
        )
      } else {
        return (
          <div className="card-header stream-data-container">
            <div>
              <a href={channelURL}><img src={parsedImg} alt="thumbnail" className="img-responsive stream-thumbnail"/></a>
            </div>
            <div>
              <h1 id="channelName">{channelName}</h1>
              <h3>{this.props.title}</h3>
              <h5>Stream Started: {this.props.started_at}</h5>
              <h6>Viewer Count: {this.props.viewer_count}</h6>
              <h6 id="notInGame">Streamer is currently not in game</h6>
            </div>
          </div>
        )
      }
    };
    const channelName = this.props.mergedData.thumbnail_url.split("/")[4].split("user_")[1].split("-")[0];
    const channelURL = `https://www.twitch.tv/${channelName}`;
    return (
      <div className="card">
        {currentlyStreaming()}
      </div>
    )
  }
}

export default StreamList;
