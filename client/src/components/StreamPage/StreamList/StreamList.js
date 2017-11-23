import React from "react";
import template from "url-template";

const StreamList = (props) => {
  let parsedImg = template.parse(props.thumbnail_url).expand({ width: 320, height: 180 });

  const currentlyStreaming = () => {
    if (props.mergedData.overwatch && props.mergedData.overwatch.broadcaster.hero) {
      return (
        <h6>currently playing game as: {props.mergedData.overwatch.broadcaster.hero.name}</h6>
      )
    } else {
      return (
        <h6>Streamer is currently not in game</h6>
      )
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={parsedImg} alt="thumbnail" className="img-responsive"/>
        <h3>{props.title}</h3>
        <h5>Stream Started: {props.started_at}</h5>
        <h6>Viewer Count: {props.viewer_count}</h6>
        {currentlyStreaming()}
      </div>
    </div>
  )
};

export default StreamList;
