import React from "react";
import template from "url-template";
import "./StreamList.css";

const StreamList = (props) => {
  let parsedImg = template.parse(props.thumbnail_url).expand({ width: 320, height: 180 });

  const currentlyStreaming = () => {
    if (props.mergedData.overwatch && props.mergedData.overwatch.broadcaster.hero) {
      return (
        <div key={props.mergedData.user_id}>
          <h6>Currently playing as: {props.mergedData.overwatch.broadcaster.hero.name}</h6>
          <h6>Role: {props.mergedData.overwatch.broadcaster.hero.role}</h6>
        </div>
      )
    } else {
      return (
        <h6>Streamer is currently not in game</h6>
      )
    }
  };

  const channelName = props.mergedData.thumbnail_url.split("/")[4].split("user_")[1].split("-")[0];
  const channelURL = `https://www.twitch.tv/${channelName}`;

  return (
    <div className="card" key={props.mergedData.user_id}>
      <div className="card-header stream-data-container">
        <div>
          <a href={channelURL}><img src={parsedImg} alt="thumbnail" className="img-responsive stream-thumbnail"/></a>
        </div>
        <div>
          <h1>{channelName}</h1>
          <h3>{props.title}</h3>
          <h5>Stream Started: {props.started_at}</h5>
          <h6>Viewer Count: {props.viewer_count}</h6>
          {currentlyStreaming()}
        </div>
      </div>
    </div>
  )
};

export default StreamList;
